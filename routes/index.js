const routes = require('express').Router();
routes.get('/', (req, res) => {
    res.send('Steven Towne')
});

routes.use('/contacts', require('./contacts'))

module.exports = routes;
