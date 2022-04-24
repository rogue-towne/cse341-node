const routes = require('express').Router();
routes.get('/', (req, res) => {
    res.send('Steven Towne')
});

module.exports = routes;
