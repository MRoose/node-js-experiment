const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'My API',
        description: 'Description',
    },
    host: 'localhost:8080',
    schemes: ['http'],
};

const outputFile = './openapi.json';
const endpointsFiles = ['main.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);