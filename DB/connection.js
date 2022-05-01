require('dotenv').config();
const URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.8rc38.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const Mongoclient = require('mongodb').MongoClient;
const connectDB = async () => {
    Mongoclient.connect(URI, function(err, db){
        if (err) throw err;
        var dbo = db.db("cse341");
        dbo.collection("contacts").find().toArray(function(err,result){
            if (err) throw err;
            console.log(result);
            db.close();
    });
    });
} 

module.exports = connectDB;