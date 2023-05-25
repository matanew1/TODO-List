// libraries
const express = require('express');

// own modules
const middlewares = require('./middlewares');
const routes = require('./routes');

// app
const app = express();

// middlewares
app.use(middlewares);

module.exports = app;


