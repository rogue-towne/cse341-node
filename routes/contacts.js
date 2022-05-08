const routes = require('express').Router();
const connect = require("../DB/connection");
//const contactsController = require("../controllers/contacts");
const ObjectId = require('mongodb').ObjectId;
const Post = require('../models/contacts')


// routes.use(bodyparser.urlencoded({extended:false}));
// routes.use(bodyparser.json());

routes.get('/', (req, res) => {
  const results = connect.getCollection().find();
  results.toArray().then((documents) => {
    res.status(200).json(documents);
    console.log("Returned All Contacts")
  }); 
});

routes.get('/:id', (req, res) => {
  const contactId = new ObjectId(req.params.id);
  const results = connect.getCollection().find({_id: contactId});
  results.toArray().then((documents) => {
    res.status(200).json(documents[0]);
    console.log(`Returned Contact ${req.params.id}`);
  }); 
});

routes.post('/', (req, res) => {
  console.log(req.body);
});


// routes.post('/', (req, res) => {
//   const newContact = {
//     firstName: req.body.firstName,
//     lastName: req.body.lastName,
//     email: req.body.email,
//     favoriteColor: req.body.favoriteColor,
//     birthday: req.body.birthday
//   };

//   const results = connect.getCollection().insertOne(
//     newContact
//     // {
//     //   "contact4": {
//     //   firstName: "Tony", 
//     //   lastName: "Stark",
//     //   email: "stark@email.com",
//     //   favoriteColor: "Purple",
//     //   birthday: "05/12/1981"
//     // }}
//   );
//   if (results.acknowledged){
//     res.status(201).json(results);
//   } else {
//     res.status(500).json(results.error || 'An error occured while creating contact.')
//   }
// });

module.exports = routes;
