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
    this.platform = null
    this.projectID = null
  }

  setup () {
    // Setup databases
    this.db = new Dexie('scratchmoar')
    this.db.version(1).stores({
      autosave: '&key,value',
      projects: 'id,created,updated,title,*tags'
    })
    
    // Load autosave
    this.loadAutosave()

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
    document.addEventListener('keydown', e => {
      if (e.ctrlKey && e.key === 's') {
        this.commitAutosave()

        if (this.platform === 'turbowarp') {
          e.preventDefault()
          e.stopImmediatePropagation()
          return false
        }
      }
    }, true)
    
    // Remove existing autosave UI
    if (this.platform === 'turbowarp') {
      document.querySelector('[class*="menu_menu-item_"] > span')?.forEach(el => {
        if (el.textContent === 'Save as...') {
          el.parentNode.remove()
        }
      })
    }
  }

  /**
   * Add save button
   */
  addSaveButton () {
    // Hide existing save UI and replace with our own
    const style = document.createElement('style')
    style.textContent = `
      [class*="save-status_save-now_"] span {
        display: none;
      }
    `
    document.querySelector('head').appendChild(style)

    // Find a menu item and copy it's classes for styling
    const $menuItem = document.querySelector('[class*="menu-bar_menu-bar-item_"][class*="menu-bar_hoverable_"]:not([class*="menu-bar_language-menu_"])')

    const $btn = document.createElement('div')
    $menuItem.classList.forEach(className => $btn.classList.add(className))
    
    const $span = document.createElement('span')
    $span.textContent = 'Save to browser'
    
    $btn.appendChild($span)
    document.querySelector('[class*="menu-bar_account-info-group_"]').appendChild($btn)
    $btn.addEventListener('click', () => this.commitAutosave())
  }
  
  /**
   * Called automatically by Scratch
   */
  getInfo () {
    if (!this.vm) {
      this.vm = globalThis.Scratch.vm
      this.vm.on('PROJECT_CHANGED', () => this.autosave())
      this.setup()
      this.addSaveButton()
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
  autosave = debounce(function (callback) {
    this.vm.saveProjectSb3().then(content => {
      this.db.autosave.put({key: 'data', value: content})
        .then(() => callback && callback())
        .catch(err => console.log('⚠️ Error autosaving:', err))
    })
  }, DEBOUNCE_TIME, {leading: false, trailing: true})

  /**
   * Load autosave
   */
  loadAutosave () {
    this.db.open().then(() => {
      this.db.autosave.count().then(count => {
        // Create default record
        if (!count) {
          this.db.autosave.add({key: 'id', value: 'autosave'})
        } else {
          this.db.autosave.get({key: 'id'}).then(record => {
            if (record.value === this.projectID) {
              this.db.autosave.get({key: 'data'}).then(content => {
                if (content.value) {
                  this.isLoading = true
                  zip.loadAsync(content.value).then(zipContents => {
                    zipContents.files['project.json'].async('uint8array').then(json => {
                      try {
                        this.vm.loadProject(json).then(() => {
                          setTimeout(() => this.isLoading = false, DEBOUNCE_TIME + 50)
                        })
                      } catch (e) {
                        this.isLoading = false
                        console.warning('⚠️ Error loading autosave:', e)
                      }
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

  /**
   * Commit an autosave
   */
  commitAutosave () {
    this.autosave(() => {
      console.log('autosaved')
    })
  }
}

// Automatically add the extension if it's getting imported,
// otherwise you'll have to manually run this yourself
globalThis.Scratch && Scratch.extensions.register(new Moar())
export default Moar