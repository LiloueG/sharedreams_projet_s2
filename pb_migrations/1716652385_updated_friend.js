/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("esslmy3olvz42tl")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "k5jfpec7",
    "name": "friend_id",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("esslmy3olvz42tl")

  // remove
  collection.schema.removeField("k5jfpec7")

  return dao.saveCollection(collection)
})
