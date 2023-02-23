import {createApp} from 'vue'
import App from './App.vue'

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
    this.vm = globalThis.Scratch.vm
    this.runtime = this.vm.runtime
    
    this.app = createApp(App)
    this.app.mount('[class*="menu-bar_account-info-group_"]')
    
    console.log('🧩 Scratchmoar extension loaded!')

    // Add custom styles
    const style = document.createElement('style')
    style.innerHTML = `

    `
    document.querySelector('body').appendChild(style)
  }
}

// Automatically add the extension if it's getting imported,
// otherwise you'll have to manually run this yourself
globalThis.Scratch && Scratch.extensions.register(new Scratchmoar())
export default Scratchmoar