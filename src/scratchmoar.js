import _SETUP from './setup.js'
import _SAVING from './store/saving.js'
import {debounce} from 'lodash'
import JSZip from 'jszip'

const zip = new JSZip()
const DEBOUNCE_TIME = 250

/**
 * Scrtachmoar extension
 * @todo Replace console.warning() and catch messages with Vue notifications
 */
class Scratchmoar {
  constructor () {
    // Prop
    this.app = null // Vue app
    this.vm = null // scratch-gui Virtual Machine
    this.runtime = null // The Scratch Blocks extention runtime
    this.db = null // IndexedDB Database
    this.platform = null // Platform type ("scratch" for scratch.mit.edu, "turbowarp" assumes ?extension= support)
    this.projectID = null // Project ID from URL
    this.isLoading = false // Flag used to prevent autosave loops

    // Selectors
    this.$selectors = {
      projectTitle: 'input[class*="project-title-input_title-field_"]',
      menubarPortal: '[class*="menu-bar_account-info-group_"]'
    }
  }
  
  setup () {_SETUP.setup.call(this)}
  scratchmoarNull () {return null}
  getInfo () {return _SETUP.getInfo.call(this)}

  autosave = debounce(function () {_SAVING.autosave.call(this)}, DEBOUNCE_TIME, {leading: false, trailing: true})
  saveSnapshot () {_SAVING.saveSnapshot.call(this)}
  updateSnapshot (ev) {_SAVING.updateSnapshot.call(this, ev)}
  async downloadSnapshots () {await _SAVING.downloadSnapshots.call(this)}

  /**
   * Reset the database
   */
  resetDB () {
    this.db.settings.clear()
    this.db.snapshots.clear()
  }

  /**
   * Delete a snapshot
   */
  deleteSnapshot (ev) {
    this.db.snapshots.delete(ev.detail)
  }
  
  /**
   * Load a snapshot
   */
  loadSnapshot (ev) {
    this.db.snapshots.get(ev.detail).then(snapshot => {
      this.isLoading = true
      this.db.settings.put({key: 'lastSnapshotID', value: snapshot.id})
      
      zip.loadAsync(snapshot.data).then(zipContents => {
        zipContents.files['project.json'].async('uint8array').then(content => {
          this.vm.loadProject(content)
            .then(() => {
              document.dispatchEvent(new CustomEvent('scratchmoarLoadedProject'))
              document.querySelector(this.$selectors.projectTitle).value = snapshot.title || 'Untitled'
            })
            .catch(err => console.log('⚠️ Error loading project:', err))
            .finally(() => this.isLoading = false)
        })
      })
    }).catch(err => console.log('⚠️ Error loading snapshot:', err))
  }

  /**
   * Load snapshots
   * @todo Needs better error catching
   */
  loadSnapshots () {
    const $btn = document.createElement('input')
    $btn.type = 'file'
    $btn.accept = '.json'
    $btn.style.display = 'none'

    $btn.addEventListener('change', async () => {
      const file = $btn.files[0]
      this.db.import(file)
        .then(() => {
          // Load last snapshot
          this.db.settings.get({key: 'lastSnapshotID'}).then(snapshot => {
            this.loadSnapshot({detail: snapshot.value})
          })
        })
        .catch(err => console.log('⚠️ Error importing:', err))
      document.body.removeChild($btn)
    })
    document.body.appendChild($btn)
    $btn.click()

    // Read the file
    console.log('Load snapshots')
  }

  /**
   * Load autosave
   */
  loadAutosave () {
    // Create default record
    this.db.settings.get({key: 'autosave'}).then(content => {
      if (content.value) {
        this.isLoading = true
        zip.loadAsync(content.value).then(zipContents => {
          zipContents.files['project.json'].async('uint8array').then(json => {
            this.vm.loadProject(json)
              .then(() => {
                setTimeout(() => {
                  this.isLoading = false
                  this.db.settings.get({key: 'lastSnapshotID'}).then(snapshot => {
                    this.db.snapshots.where('id').equals(snapshot.value).first().then(snapshot => {
                      document.querySelector(this.$selectors.projectTitle).value = snapshot.title || 'Untitled'
                    })
                  })
                }, DEBOUNCE_TIME + 50)
              })
              .catch(ev => console.warning('⚠️ Error loading autosave:', ev))
              .finally(() => this.isLoading = false)
          })
        })
      }
    })
  }

}

// Automatically add the extension if it's getting imported,
// otherwise you'll have to manually run this yourself
globalThis.Scratch && Scratch.extensions.register(new Scratchmoar())

export default Scratchmoar