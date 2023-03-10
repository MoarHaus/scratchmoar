import _SETUP from './setup.js'
import _SAVING from './store/saving.js'
import _LOADING from './store/loading.js'
import _DELETING from './store/deleting.js'

import {debounce} from 'lodash'
const DEBOUNCE_TIME = 250

/**
 * Scrtachmoar extension
 * @todo Replace console.warning() and catch messages with Vue notifications
 */
class Scratchmoar {
  constructor () {
    // Constants
    this.DEBOUNCE_TIME = DEBOUNCE_TIME
    
    // Prop
    this.app = null // Vue app
    this.vm = null // scratch-gui Virtual Machine
    this.runtime = null // The Scratch Blocks extention runtime
    this.db = null // IndexedDB Database
    this.platform = null // Platform type ("scratch" for scratch.mit.edu, "turbowarp" assumes ?extension= support)
    this.projectID = null // Project ID from URL
    this.isLoading = false // Flag used to prevent autosave loops
    this.finishedLoading = false // Flag used to prevent autosave loops
    this.isSaving = false // Flag used to prevent autosave loops

    // Selectors
    this.$selectors = {
      projectTitle: 'input[class*="project-title-input_title-field_"]',
      menubarPortal: '[class*="menu-bar_account-info-group_"]'
    }
  }
  
  // @fixme - This seemed like a good idea at first,
  // but it can introduce bugs if method signatures change

  // Setup
  setup () {_SETUP.setup.call(this)}
  scratchmoarNull () {return null}
  getInfo () {return _SETUP.getInfo.call(this)}

  // Saving
  autosave = debounce(function () {_SAVING.autosave.call(this)}, this.DEBOUNCE_TIME, {leading: false, trailing: true})
  saveSnapshot () {_SAVING.saveSnapshot.call(this)}
  updateSnapshot (ev) {_SAVING.updateSnapshot.call(this, ev)}
  async downloadSnapshots () {await _SAVING.downloadSnapshots.call(this)}

  // Loading
  loadSnapshot (ev) {_LOADING.loadSnapshot.call(this, ev)}
  loadSnapshots () {_LOADING.loadSnapshots.call(this)}
  loadAutosave () {_LOADING.loadAutosave.call(this)}

  // Deleting
  resetDB () {_DELETING.resetDB.call(this)}
  deleteSnapshot (ev) {_DELETING.deleteSnapshot.call(this, ev)}

  // Misc
  setTitle (title = 'Untitled') {document.querySelector(this.$selectors.projectTitle).value = title}
  getTitle (def = 'Untitled') {return document.querySelector(this.$selectors.projectTitle).value || def}
  log () {console.log(...arguments)}
}

// Automatically add the extension if it's getting imported,
// otherwise you'll have to manually run this yourself
globalThis.Scratch && Scratch.extensions.register(new Scratchmoar())

export default Scratchmoar