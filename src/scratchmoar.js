import Dexie from 'dexie'
import {debounce} from 'lodash'
import JSZip from 'jszip'
const zip = new JSZip()
const DEBOUNCE_TIME = 250

class Moar {
  constructor (runtime) {
    globalThis.Moar = this
    this.vm = null
    this.runtime = null
    this.isLoading = false

    // Setup databases
    this.db = new Dexie('scratchmoar')
    this.db.version(1).stores({
      autosave: '&key,value',
      projects: 'id,created,updated,title,*tags'
    })
    
    // autosave
    this.db.open().then(() => {
      this.db.autosave.count().then(count => {
        let path = window.location.pathname
        let parts = path.split('/')
        let projectID

        // Scratch: /projects/ID
        if (parts[1] === 'projects') {
          projectID = parts[2]
        // Turbowarp: /ID
        } else if (Number.isInteger(+parts[1])) {
          projectID = parts[2]
        // Create new
        } else {
          projectID = 'autosave'
        }

        // Create default record
        if (!count) {
          this.db.autosave.add({key: 'id', value: 'autosave'})
        } else {
          // this.db.autosave.update('id', {value: projectID})
          this.db.autosave.get({key: 'id'}).then(record => {
            if (record.value === projectID) {
              this.db.autosave.get({key: 'data'}).then(content => {
                if (content.value) {
                  this.isLoading = true
                  zip.loadAsync(content.value).then(zipContents => {
                    zipContents.files['project.json'].async('uint8array').then(json => {
                      this.vm.loadProject(json, zipContents).then(() => {
                        setTimeout(() => this.isLoading = false, DEBOUNCE_TIME + 50)
                      })
                    })
                  })
                }
              })
            } else {
              console.warning('Autosave ID and current project ID do not match. Skipping autoload')
            }
          })
        }
      })
    }).catch(err => console.log('⚠️ Error opening IndexedDB:', err))
  }
  
  getInfo () {
    if (!this.vm) {
      this.vm = globalThis.Scratch.vm
      this.vm.on('PROJECT_CHANGED', () => this.autosave())
    }
    
    this.runtime = this.vm.runtime

    return {
      id: 'scratchmoar',
      name: 'Moooar',
      blocks: [
        {
          opcode: 'scratchmoarTest',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Test',
        },
      ],
    }
  }

  scratchmoarTest () {
    return 'Scratchmoar'
  }

  /**
   * Autosaves every few moments
   */
  autosave = debounce(function () {
    this.vm.saveProjectSb3().then(content => {
      this.db.autosave.put({key: 'data', value: content}).catch(err => console.log('⚠️ Error autosaving:', err))
    })
  }, DEBOUNCE_TIME, {leading: false, trailing: true})
}

// Automatically add the extension if it's getting imported,
// otherwise you'll have to manually run this yourself
globalThis.Scratch && Scratch.extensions.register(new Moar())
export default Moar