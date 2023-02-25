export default {
  /**
   * Load a snapshot
   */
  loadSnapshot (ev) {
    this.db.snapshots.get(ev.detail).then(snapshot => {
      this.isLoading = true
      this.db.settings.put({key: 'lastSnapshotID', value: snapshot.id})
      
      this.zip.loadAsync(snapshot.data).then(zipContents => {
        zipContents.files['project.json'].async('uint8array').then(content => {
          this.vm.loadProject(content)
            .then(() => {
              document.dispatchEvent(new CustomEvent('scratchmoarLoadedProject'))
              document.querySelector(this.$selectors.projectTitle).value = snapshot.title || 'Untitled'
            })
            .catch(err => console.log('⚠️ Error loading project:', err))
            .finally(() => this.isLoading = false)
        })
      })
    }).catch(err => console.log('⚠️ Error loading snapshot:', err))
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

    // Read the file
    console.log('Load snapshots')
  },

  /**
   * Load autosave
   */
  loadAutosave () {
    // Create default record
    this.db.settings.get({key: 'autosave'}).then(content => {
      if (content.value) {
        this.isLoading = true
        this.zip.loadAsync(content.value).then(zipContents => {
          zipContents.files['project.json'].async('uint8array').then(json => {
            this.vm.loadProject(json)
              .then(() => {
                setTimeout(() => {
                  this.isLoading = false
                  this.db.settings.get({key: 'lastSnapshotID'}).then(snapshot => {
                    this.db.snapshots.where('id').equals(snapshot.value).first().then(snapshot => {
                      document.querySelector(this.$selectors.projectTitle).value = snapshot.title || 'Untitled'
                    })
                  })
                }, this.DEBOUNCE_TIME + 50)
              })
              .catch(ev => console.warning('⚠️ Error loading autosave:', ev))
              .finally(() => this.isLoading = false)
          })
        })
      }
    })
  }
}