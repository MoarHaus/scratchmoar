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
  }
}