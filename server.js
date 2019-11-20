require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.APP_PORT || process.env.PORT;
const bodyParser = require('body-parser');
const routes = require('./api/restApiRoutes');

// for database
require('./config');

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send(`Hi There first api 111 ${process.env.DB_HOST}`);
});

// for rest-api
app.use(routes);

app.listen(port, function () {
    console.log(`Listening on port ${port} !`);
});
