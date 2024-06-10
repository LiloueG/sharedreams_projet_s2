/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kqrgtyqz62cw5xz")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gylzlljh",
    "name": "dreamnight",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "dream",
        "nightmare"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kqrgtyqz62cw5xz")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gylzlljh",
    "name": "reve_cauch",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "dream",
        "nightmare"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
