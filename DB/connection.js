const mongoose = require('mongoose');
const URI = `mongodb+srv://$(process.env.DB_USER):$(process.env.DB_PASS)@cluster0.8rc38.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const connectDB = async () => {
    await mongoose.connect(URI);
    console.log('db connected');
};
module.exports = connectDB;