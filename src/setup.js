import App from './App.vue'
import Snapshots from './store/snapshots.js'
import $STYLES from './styles/main.css.js'
import {createApp} from 'vue'
import JSZip from 'jszip'

export default {
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
    this.zip = new JSZip()

    // Mount Vue
    this.app = createApp(App)
    this.app.mount(this.$selectors.menubarPortal)
    
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

    // @todo This should be added to db so that we can have multiple projects too!
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
    
    // Custom event listeners
    this.loadAutosave()
    document.addEventListener('scratchmoarResetDB', this.resetDB.bind(this))
    document.addEventListener('scratchmoarSaveSnapshot', this.saveSnapshot.bind(this))
    document.addEventListener('scratchmoarLoadSnapshot', this.loadSnapshot.bind(this))
    document.addEventListener('scratchmoarDeleteSnapshot', this.deleteSnapshot.bind(this))
    document.addEventListener('scratchmoarUpdateSnapshot', this.updateSnapshot.bind(this))
    document.addEventListener('scratchmoarDownloadSnapshots', this.downloadSnapshots.bind(this))
    document.addEventListener('scratchmoarLoadSnapshots', this.loadSnapshots.bind(this))

    this.vm.on('PROJECT_CHANGED', () => this.autosave())

    console.log('🧩 Scratchmoar extension loaded!')
  },
  

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
  },
}