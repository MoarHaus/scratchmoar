import {exportDB} from 'dexie-export-import'
import JSZip from 'jszip'

export default {
  /**
   * Autosaves every few moments
   */
  autosave () {
    if (this.isLoading || this.isSaving) return

    const files = this.vm.saveProjectSb3DontZip()
    this.isSaving = true
    this.db.settings.put({key: 'autosave', value: {
      title: document.querySelector(this.$selectors.projectTitle).value,
      date: new Date(),
      files
    }}).finally(() => {
      this.isSaving = false
    })
  },
  
  /**
   * Save a snapshot
   * - Take last autosave and recursively add each file/asset to zip
   * - Save zip to indexedDB
   */
  saveSnapshot () {
    const zip = new JSZip()
    this.isSaving = true
    this.db.settings.get({key: 'autosave'}).then(autosave => {
      if (autosave.value) {
        const zip = new JSZip()
        Object.keys(autosave.value.files).forEach(key => zip.file(key, autosave.value.files[key]))

        zip.generateAsync({type: 'arraybuffer'}).then(data => {})
      }
    }).catch(err => {
      // @fixme Use notification
      this.log('⚠️ Error saving snapshot:', err)
      this.isSaving = false
    })
    
    // this.vm.saveProjectSb3().then(content => {
    //   this.db.snapshots.add({
    //     title: document.querySelector(this.$selectors.projectTitle).value,
    //     date: new Date(),
    //     data: content
    //   }).then(id => {
    //     this.db.settings.put({key: 'lastSnapshotID', value: id})
    //   }).catch(err => console.log('⚠️ Error autosaving:', err))
    // })
  },
 
  /**
   * Update a snapshot
   */
  updateSnapshot (ev) {
    // this.vm.saveProjectSb3().then(content => {
    //   console.log('🧩 Updating snapshot', ev.detail)
    //   this.db.snapshots.update(ev.detail, {
    //     updated: new Date(),
    //     data: content
    //   }).then(id => {
    //     this.db.settings.put({key: 'lastSnapshotID', value: ev.detail})
    //   }).catch(err => console.log('⚠️ Error autosaving:', err, ev))
    // })
  },

  /**
   * Download snapshots
   */
  async downloadSnapshots () {
    const blob = await exportDB(this.db)
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    const title = document.querySelector(this.$selectors.projectTitle).value
    const date = new Date().toISOString().split('T')
    
    a.href = url
    a.download = `${date[0]}-${title}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }
}