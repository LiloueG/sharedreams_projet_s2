/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("w46iwcn7d1su6fp")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9utetb6r",
    "name": "field2",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "kqrgtyqz62cw5xz",
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

  // remove
  collection.schema.removeField("9utetb6r")

  return dao.saveCollection(collection)
})
