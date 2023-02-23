import {createApp} from 'vue'
import App from './App.vue'
import $STYLES from './styles.css.js'
import Snapshots from './store/snapshots.js'

class Scratchmoar {
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
    // resetDB if ?reset is present in URL
    if (window.location.search.includes('reset')) {
      this.resetDB()
    }

    // Reference virtual machine
    this.vm = globalThis.Scratch.vm
    this.runtime = this.vm.runtime
    this.db = Snapshots
    globalThis.scratchmoar = this
    console.log(Snapshots)
    
    // Mount Vue
    this.app = createApp(App)
    this.app.mount('[class*="menu-bar_account-info-group_"]')
    
    // Manually add styles
    const $styles = document.createElement('style')
    $styles.innerHTML = $STYLES
    document.querySelector('body').appendChild($styles)

    console.log('🧩 Scratchmoar extension loaded!')
  }

  /**
   * Reset the database
   */
  resetDB () {
    this.db.delete()
    console.log('reset')
  }
}

// Automatically add the extension if it's getting imported,
// otherwise you'll have to manually run this yourself
globalThis.Scratch && Scratch.extensions.register(new Scratchmoar())

export default Scratchmoar