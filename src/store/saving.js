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
      title: this.getTitle(),
      date: new Date(),
      files
    }}).finally(() => {
      this.isSaving = false
    })
  },
  
  /**
   * Save a snapshot
   * - Take last autosave and recursively add each file/asset to zip
   *  (we'll do this manually so we can use same loading mechanism)
   * - Save zip to indexedDB
   */
  saveSnapshot () {
    const zip = new JSZip()
    const files = this.vm.saveProjectSb3DontZip()
    this.isSaving = true

    Object.keys(files).forEach(key => zip.file(key, files[key]))
    zip.generateAsync({type: 'arraybuffer'}).then(data => {
      this.db.snapshots.add({
        title: this.getTitle(),
        date: new Date(),
        data
      }).then(id => {
        this.db.settings.put({key: 'lastSnapshotID', value: id}).catch(this.log)
      })
      .catch(this.log)
      .finally(() => this.isSaving = false)
    })
  },
 
  /**
   * Update a snapshot
   */
  updateSnapshot (ev) {
    const zip = new JSZip()
    const files = this.vm.saveProjectSb3DontZip()
    Object.keys(files).forEach(key => zip.file(key, files[key]))
    this.db.settings.put({key: 'lastSnapshotID', value: ev.detail}).catch(this.log)

    zip.generateAsync({type: 'arraybuffer'}).then(data => {
      this.isSaving = true
      this.db.snapshots.update(ev.detail, {
        title: this.getTitle(),
        updated: new Date(),
        data
      })
        .then(() => this.autosave())
        .catch(this.log)
        .finally(() => this.isSaving = false)
    }).catch(this.log)
  },

  /**
   * Download snapshots
   */
  async downloadSnapshots () {
    const blob = await exportDB(this.db)
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    const title = this.getTitle()
    const date = new Date().toISOString().split('T')
    
    a.href = url
    a.download = `${date[0]}-${title}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }
}