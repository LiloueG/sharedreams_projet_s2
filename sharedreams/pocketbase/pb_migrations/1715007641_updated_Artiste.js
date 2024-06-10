/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("16ha7l92d4zov2g")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zccmttqp",
    "name": "relation",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "pp448b0rzc9zoz8",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("16ha7l92d4zov2g")

  // remove
  collection.schema.removeField("zccmttqp")

  return dao.saveCollection(collection)
})
