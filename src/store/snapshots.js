import Dexie from 'dexie'
const db = new Dexie('scratchmoar')
export default db

db.version(1).stores({
  autosave: '&key, value',
  snapshots: '++id, parentId, date, title, description, *tags'
})