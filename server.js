const express = require('express');
const connect = require('./DB/connection');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;

//Connect to database
connect.initDatabase();

app.use('/', require('./routes'))

app.listen(port, () => {
    console.log(`Running on port ${port}`)
})
