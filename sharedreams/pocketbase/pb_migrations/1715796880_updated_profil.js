/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("w46iwcn7d1su6fp")

  collection.indexes = [
    "CREATE INDEX `idx_gx9JDc3` ON `profil` (`username`)"
  ]

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xxsuf1as",
    "name": "field",
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
  const collection = dao.findCollectionByNameOrId("w46iwcn7d1su6fp")

  collection.indexes = []

  // remove
  collection.schema.removeField("xxsuf1as")

  return dao.saveCollection(collection)
})
