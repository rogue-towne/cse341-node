const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()

const swaggerUI = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const port = process.env.PORT || 8080;

mongoose.connect(process.env.DB_URL,{ useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))


app.use(express.json())
app.use('/api-docs',swaggerUI.serve, swaggerUI.setup(swaggerDocument))

const router = require('./routes/index')
app.use('/', router)

app.listen(port, () => {
    console.log(`Running on port ${port}`)
})

// .use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     next();
//   })
// app.use(bodyParser.json())