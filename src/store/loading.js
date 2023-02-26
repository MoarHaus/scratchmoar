import JSZip from 'jszip'

export default {
  /**
   * Load autosave
   */
  loadAutosave () {
    this.isLoading = true
    
    this.db.settings.get({key: 'autosave'}).then(autosave => {
      if (autosave.value) {
        const zip = new JSZip()
        Object.keys(autosave.value.files).forEach(key => zip.file(key, autosave.value.files[key]))

        zip.generateAsync({type: 'arraybuffer'}).then(data => {
          this.vm.loadProject(data).then(() => {
            this.isLoading = false
            this.setProjectTitle(autosave.value.title)
          })
        })
      }
    })
    
    // // Create default record
    // this.db.settings.get({key: 'autosave'}).then(content => {
    //   if (content.value) {
    //     this.isLoading = true

    //     // Create z
    //     const zip = new JSZip()


    //     // this.zip.loadAsync(content.value).then(zipContents => {
    //     //   zipContents.files['project.json']?.async('uint8array').then(content => {
    //     //     this.vm.loadProject(content).then(() => {
    //     //       setTimeout(() => {
    //     //         this.isLoading = false
    //     //         this.db.settings.get({key: 'lastSnapshotID'}).then(snapshot => {
    //     //           this.db.snapshots.where('id').equals(snapshot.value).first().then(snapshot => {
    //     //             document.querySelector(this.$selectors.projectTitle).value = snapshot.title || 'Untitled'
    //     //           })
    //     //         })
    //     //       }, this.DEBOUNCE_TIME + 50)
    //     //     })
    //     //     .catch(ev => console.warning('⚠️ Error loading autosave:', ev))
    //     //     .finally(() => this.isLoading = false)
    //     //   })
    //     })
        
    //     // const url  = URL.createObjectURL(content.value)
    //     // this.zip.loadAsync(content.value).then(zipContents => {
    //     //   // Load assets
    //     //   const promises = []
    //     //   Object.keys(zipContents.files).forEach(fileName => {
    //     //     if (!fileName.endsWith('.json')) {
    //     //       // Self executing to trap the fileName, since this will be called later
    //     //       // took me a while to figure this out :P
    //     //       promises.push(((fileName) => {
    //     //         return zipContents.files[fileName].async('uint8array').then(data => {
    //     //           const assetType = this.getAssetType(fileName)
                  
    //     //           if (assetType) {
    //     //             console.log(assetType, fileName.split('.')[1], data, fileName.split('.')[0])
    //     //             this.runtime.storage.createAsset(assetType, fileName.split('.')[1], data, fileName.split('.')[0])
    //     //           }
    //     //         })
    //     //       })(fileName))
    //     //     }
    //     //   })

    //     //   // Run promises
    //     //   Promise.all(promises).then(() => {
    //     //     // Load autosave project.json
    //     //     zipContents.files['project.json'].async('uint8array').then(json => {
    //     //       this.vm.loadProject(json)
    //     //         .then(() => {
    //     //           setTimeout(() => {
    //     //             this.isLoading = false
    //     //             this.db.settings.get({key: 'lastSnapshotID'}).then(snapshot => {
    //     //               this.db.snapshots.where('id').equals(snapshot.value).first().then(snapshot => {
    //     //                 document.querySelector(this.$selectors.projectTitle).value = snapshot.title || 'Untitled'
    //     //               })
    //     //             })
    //     //           }, this.DEBOUNCE_TIME + 50)
    //     //         })
    //     //         .catch(ev => console.warning('⚠️ Error loading autosave:', ev))
    //     //         .finally(() => this.isLoading = false)
    //     //     })
    //     //   })
    //     // })
    //   }
    // })
  },

  /**
   * Load a snapshot
   */
  loadSnapshot (ev) {
    // this.db.snapshots.get(ev.detail).then(snapshot => {
    //   this.isLoading = true
    //   this.db.settings.put({key: 'lastSnapshotID', value: snapshot.id})
      
    //   this.zip.loadAsync(snapshot.data).then(zipContents => {
    //     zipContents.files['project.json'].async('uint8array').then(content => {
    //       this.vm.loadProject(content)
    //         .then(() => {
    //           document.dispatchEvent(new CustomEvent('scratchmoarLoadedProject'))
    //           document.querySelector(this.$selectors.projectTitle).value = snapshot.title || 'Untitled'
    //         })
    //         .catch(err => console.log('⚠️ Error loading project:', err))
    //         .finally(() => this.isLoading = false)
    //     })
    //   })
    // }).catch(err => console.log('⚠️ Error loading snapshot:', err))
  },

  /**
   * Load snapshots
   * @todo Needs better error catching
   */
  loadSnapshots () {
    // const $btn = document.createElement('input')
    // $btn.type = 'file'
    // $btn.accept = '.json'
    // $btn.style.display = 'none'

    // $btn.addEventListener('change', async () => {
    //   const file = $btn.files[0]
    //   this.db.import(file)
    //     .then(() => {
    //       // Load last snapshot
    //       this.db.settings.get({key: 'lastSnapshotID'}).then(snapshot => {
    //         this.loadSnapshot({detail: snapshot.value})
    //       })
    //     })
    //     .catch(err => console.log('⚠️ Error importing:', err))
    //   document.body.removeChild($btn)
    // })
    // document.body.appendChild($btn)
    // $btn.click()
  },

  /**
   * Gets the asset type from a fileName
   */
  getAssetType (fileName) {
    const ext = fileName.split('.').pop().toLowerCase()

    // @fixme These are almost certainly wrong or even potentially buggy
    switch (ext) {
      case 'svg':
        return this.ASSET_TYPES.ImageVector
      case 'png':
      case 'jpg':
      case 'jpeg':
      case 'bmp':
      case 'gif':
        return this.ASSET_TYPES.ImageBitmap
      case 'wav':
      case 'mp3':
      case 'ogg':
      case 'midi':
        return this.ASSET_TYPES.Sound
      default:
        return null
    }
  }
}