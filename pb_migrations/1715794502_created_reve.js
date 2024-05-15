/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "kqrgtyqz62cw5xz",
    "created": "2024-05-15 17:35:02.519Z",
    "updated": "2024-05-15 17:35:02.519Z",
    "name": "reve",
    "type": "base",
    "system": false,
    "schema": [
      {
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
            "reve",
            "cauchemar"
          ]
        }
      },
      {
        "system": false,
        "id": "qwazu3rf",
        "name": "emojis",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "happy",
            "heart",
            "sad",
            "tired",
            "scared"
          ]
        }
      },
      {
        "system": false,
        "id": "d7ohbh74",
        "name": "description",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("kqrgtyqz62cw5xz");

  return dao.deleteCollection(collection);
})
