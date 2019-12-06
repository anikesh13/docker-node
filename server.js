require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.APP_PORT || process.env.PORT;
const bodyParser = require('body-parser');
const restApiRoutes = require('./rest-api');
const graphqlRoutes = require('./graphql-api');

// for database
require('./config');

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send(`Hi There, first dummy API is Here`);
});

// for rest-api
app.use(restApiRoutes);

// use for Graphql-api
app.use(graphqlRoutes);

app.listen(port, function () {
    console.log(`Listening on port ${port} !`);
});
