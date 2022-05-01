// const Mongoose = require('mongodb');

// const URI = "mongodb+srv://itsrtowne:node123@cluster0.8rc38.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// async function main(){

//     const database = new Mongoose(URI);

//     try {
//         await database.connect();

//         await getAllContacts(database);
//     } catch (e) {
//         console.error(e);
//     } finally{
//         await database.close();
//     }
// }
// main().catch(console.error);
// async function getAllContacts(database){
//     const contacts = database.db("cse341").collections("contacts").find();
// }
// async function getContactById(database, id ){
//     const contact = database.db("cse341").collections("contacts").find({ _id: userId });
// }

