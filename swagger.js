const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts Api',
    description: 'Includes contact info and some extra info about people',
  },
  host: 'localhost:8080',
  schemes: ['http'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./server.js'); // Your project's root file
  });