// import graphql-express and BookSchema
const express = require('express');
const app = express();
const graphqlExpress = require("express-graphql");
const bookSchema = require('./BookSchema').BookSchema;
//add the schema to graphql-express 
app.use('/graphql', graphqlExpress({
    schema: bookSchema,
    rootValue: global,
    graphiql: true
}));

module.exports = app;