process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var mongoose = require('./config/mongoose');
var db = mongoose();

var express = require('./config/express');

var app = express();
app.listen(8000);

console.log('server is listening at http://localhost:8000');

module.exports = app;