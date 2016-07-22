var env = process.env.NODE_ENV;
var config = require('./env/' + env + '.js');

module.exports = config;
