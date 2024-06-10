/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kqrgtyqz62cw5xz")

  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kqrgtyqz62cw5xz")

  collection.updateRule = ""
  collection.deleteRule = ""

  return dao.saveCollection(collection)
})
