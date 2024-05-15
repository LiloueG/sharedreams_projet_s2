/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kqrgtyqz62cw5xz")

  collection.name = "dreams"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kqrgtyqz62cw5xz")

  collection.name = "dream"

  return dao.saveCollection(collection)
})
