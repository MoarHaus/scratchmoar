import {exportDB} from 'dexie-export-import'

export default {
  /**
   * Autosaves every few moments
   */
  autosave () {
    this.vm.saveProjectSb3().then(content => {
      this.db.settings.put({key: 'autosave', value: content})
        .catch(err => console.log('⚠️ Error autosaving:', err))
    })
  },
  
  /**
   * Save a snapshot
   */
  saveSnapshot () {
    this.vm.saveProjectSb3().then(content => {
      this.db.snapshots.add({
        title: document.querySelector(this.$selectors.projectTitle).value,
        date: new Date(),
        data: content
      }).then(id => {
        this.db.settings.put({key: 'lastSnapshotID', value: id})
      }).catch(err => console.log('⚠️ Error autosaving:', err))
    })
  },
 
  /**
   * Update a snapshot
   */
  updateSnapshot (ev) {
    this.vm.saveProjectSb3().then(content => {
      console.log('🧩 Updating snapshot', ev.detail)
      this.db.snapshots.update(ev.detail, {
        updated: new Date(),
        data: content
      }).then(id => {
        this.db.settings.put({key: 'lastSnapshotID', value: ev.detail})
      }).catch(err => console.log('⚠️ Error autosaving:', err, ev))
    })
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