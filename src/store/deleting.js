export default {
  /**
   * Reset the database
   */
  resetDB () {
    this.db.settings.clear()
    this.db.snapshots.clear()
  },

  /**
   * Delete a snapshot
   */
  deleteSnapshot (ev) {
    this.db.snapshots.delete(ev.detail)
  }
}