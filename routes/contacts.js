const routes = require('express').Router();
const connect = require("../DB/connection");
//const contactsController = require("../controllers/contacts");

routes.get('/', (req, res) => {
  connect
    .getCollection()
    .find()
    .toArray((err, result) => {
      if (err) throw err;
      res.json(result);
      console.log("Contacts Query Successful!");
    });
});

module.exports = routes;
