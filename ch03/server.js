var express = require('express');
var app = express();

app.use('/', function(req, res) {
    res.send('Hello World');
});

app.listen(8000);
console.log('server is listening at http://localhost:8000');

module.exports = app;