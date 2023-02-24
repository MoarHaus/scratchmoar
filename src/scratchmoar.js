import JSZip from 'jszip'
import {debounce} from 'lodash'
import {createApp} from 'vue'
import $STYLES from './styles.css.js'
import App from './App.vue'
import Snapshots from './store/snapshots.js'

const zip = new JSZip()
const DEBOUNCE_TIME = 250

/**
 * Scrtachmoar extension
 * @todo Replace console.warning() and catch messages with Vue notifications
 */
class Scratchmoar {
  constructor () {
    this.vm = null // Virtual machine
    this.runtime = null // Runtime
    this.db = null // Database
    this.app = null // Vue app
    this.platform = null // Platform (scratch, turbowarp)
    this.projectID = null // Project ID from URL
    this.isLoading = false
  }
  
  /**
   * Entry point for extension
   */
  getInfo () {
    if (!this.vm) {
      this.setup()
    }

    return {
      id: 'scratchmoar',
      name: 'Moooar',
      blocks: [
        {
          opcode: 'scratchmoarNull',
          blockType: Scratch.BlockType.REPORTER,
          text: 'null'
        }
      ]
    }
  }

  /**
   * Test block
   */
  scratchmoarNull () {
    return null
  }

  /**
   * Setup the extension
   */
  setup () {
    // resetDB if ?reset is present in URL and redirect to same URL without reset
    if (window.location.search.includes('reset')) {
      this.resetDB()
      window.location = window.location.href.replace('?reset', '')
    }

    // Reference virtual machine
    this.vm = globalThis.Scratch.vm
    this.runtime = this.vm.runtime
    this.db = Snapshots
    globalThis.scratchmoar = this
    
    // Mount Vue
    this.app = createApp(App)
    this.app.mount('[class*="menu-bar_account-info-group_"]')
    
    // Manually add styles
    const $styles = document.createElement('style')
    $styles.innerHTML = $STYLES
    document.querySelector('body').appendChild($styles)

    // Determine the current project ID
    let path = window.location.pathname
    let parts = path.split('/')

    // Determine platform
    switch (window.location.host) {
      case 'scratch.mit.edu':
        this.platform = 'scratch'
      break
      case 'turbowarp.org':
      default:
        this.platform = 'turbowarp'
    }

    // Scratch: /projects/ID
    if (parts[1] === 'projects') {
      this.projectID = parts[2]
    // Turbowarp: /ID
    } else if (Number.isInteger(+parts[1])) {
      this.projectID = parts[2]
    // Create new
    } else {
      this.projectID = 'autosave'
    }

    // Bind to CTRL+S
    // document.addEventListener('keydown', e => {
    //   if (e.ctrlKey && e.key === 's') {
    //     this.saveSnapshot()

    //     if (this.platform === 'turbowarp') {
    //       e.preventDefault()
    //       e.stopImmediatePropagation()
    //       return false
    //     }
    //   }
    // }, true)
    
    // Remove existing autosave UI
    if (this.platform === 'turbowarp') {
      document.querySelectorAll('[class*="menu_menu-item_"] > span')?.forEach(el => {
        if (el.textContent === 'Save as...') {
          // el.parentNode.remove()
        }
      })
    }

    // Custom event listeners
    this.loadAutosave()
    document.addEventListener('scratchmoarResetDB', this.resetDB.bind(this))
    document.addEventListener('scratchmoarSaveSnapshot', this.saveSnapshot.bind(this))
    document.addEventListener('scratchmoarLoadSnapshot', this.loadSnapshot.bind(this))
    document.addEventListener('scratchmoarDeleteSnapshot', this.deleteSnapshot.bind(this))
    this.vm.on('PROJECT_CHANGED', () => this.autosave())

    console.log('🧩 Scratchmoar extension loaded!')
  }

  /**
   * Reset the database
   */
  resetDB () {
    this.db.settings.clear()
    this.db.snapshots.clear()
  }

  /**
   * Save a snapshot
   */
  saveSnapshot () {
    this.vm.saveProjectSb3().then(content => {
      this.db.snapshots.add({
        date: new Date(),
        data: content
      }).then(id => {
        this.db.settings.put({key: 'lastSnapshotID', value: id})
      }).catch(err => console.log('⚠️ Error autosaving:', err))
    })
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
            .then(() => document.dispatchEvent(new CustomEvent('scratchmoarLoadedProject')))
            .catch(err => console.log('⚠️ Error loading project:', err))
            .finally(() => this.isLoading = false)
        })
      })
    }).catch(err => console.log('⚠️ Error loading snapshot:', err))
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
              .then(() => setTimeout(() => this.isLoading = false, DEBOUNCE_TIME + 50))
              .catch(() => console.warning('⚠️ Error loading autosave:', e))
              .finally(() => this.isLoading = false)
          })
        })
      }
    })
  }

  /**
   * Autosaves every few moments
   */
  autosave = debounce(function (a, b, c) {
    this.vm.saveProjectSb3().then(content => {
      this.db.settings.put({key: 'autosave', value: content})
        .catch(err => console.log('⚠️ Error autosaving:', err))
    })
  }, DEBOUNCE_TIME, {leading: false, trailing: true})
}

// Automatically add the extension if it's getting imported,
// otherwise you'll have to manually run this yourself
globalThis.Scratch && Scratch.extensions.register(new Scratchmoar())

export default Scratchmoar