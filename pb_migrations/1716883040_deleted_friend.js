/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("esslmy3olvz42tl");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "esslmy3olvz42tl",
    "created": "2024-05-07 07:22:18.705Z",
    "updated": "2024-05-25 16:03:58.600Z",
    "name": "friend",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "rkndkorj",
        "name": "users_friend",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": null
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
})
