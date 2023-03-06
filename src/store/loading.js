import JSZip from 'jszip'

export default {
  /**
   * Load autosave
   */
  loadAutosave () {
    if (this.isLoading || this.isSaving) return
    
    this.isLoading = true
    this.finishedLoading = false // This gets reset in ./saving.js autosaving
    this.db.settings.get({key: 'autosave'}).then(autosave => {
      if (autosave?.value) {
        const zip = new JSZip()
        Object.keys(autosave.value.files).forEach(key => zip.file(key, autosave.value.files[key]))

        zip.generateAsync({type: 'arraybuffer'}).then(data => {
          this.vm.loadProject(data).then(() => {
            document.dispatchEvent(new CustomEvent('scratchmoarLoadedProject'))
            this.setTitle(autosave.value.title)
          }).catch(this.log)
        })
      }
    })
    .catch(this.log)
    .finally(() => this.isLoading = false)
  },

  /**
   * Load a snapshot
   */
  loadSnapshot (ev) {
    this.db.snapshots.get(ev.detail).then(snapshot => {
      this.isLoading = true
      this.db.settings.put({key: 'lastSnapshotID', value: snapshot.id}).catch(this.log)
      this.vm.loadProject(snapshot.data).then(() => {
        document.dispatchEvent(new CustomEvent('scratchmoarLoadedProject'))
        this.setTitle(snapshot.title)
      })
    }).catch(this.log)
  },

  /**
   * Load snapshots
   * @todo Needs better error catching
   */
  loadSnapshots () {
    const $btn = document.createElement('input')
    $btn.type = 'file'
    $btn.accept = '.json'
    $btn.style.display = 'none'

    $btn.addEventListener('change', async () => {
      const file = $btn.files[0]
      this.db.import(file)
        .then(() => {
          // Load last snapshot
          this.db.settings.get({key: 'lastSnapshotID'}).then(snapshot => {
            this.loadSnapshot({detail: snapshot.value})
          })
        })
        .catch(err => console.log('⚠️ Error importing:', err))
      document.body.removeChild($btn)
    })
    document.body.appendChild($btn)
    $btn.click()
  }
}