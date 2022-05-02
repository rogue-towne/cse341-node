//URI link to server
require('dotenv').config();
const URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.8rc38.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

// Database
const Mongoclient = require('mongodb').MongoClient;

let _client;
let _collection;

const initDatabase = () => {
    Mongoclient.connect(URI, (err, client) =>{
        if (err) throw err;
        _client = client;

        //From the client, return an object that represents the database collection "contacts".
        _collection =  client.db("cse341").collection("contacts");
        console.log("DB connected Successfully!")
    });
};

const getCollection = () => {
    return _collection;

};

module.exports = {initDatabase, getCollection };