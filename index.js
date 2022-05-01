const express = require('express');
const connectDB = require('./DB/connection');
require('dotenv').config();


const app = express();
const port = process.env.PORT || 3000;

app.use('/', require('./routes'))
connectDB();
app.listen(port, () => {
    console.log(`Running on port ${port}`)
})

// mongoose.connect(
//     `mongodb+srv://$(process.env.DB_USER):$(process.env.DB_PASS)@cluster0.8rc38.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
// )
// .then((result) =>{
//     app.listen(port);
// })
// .catch((err) => {
//     console.log(err);
// })