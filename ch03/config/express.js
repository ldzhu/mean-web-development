var express = require('express'),
    morgan = require('morgan'),
    compression = require('compression'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    session = require('express-session');

var config = require('./config'),
    route_index = require('../app/routes/index.server.route.js');

module.exports = function() {
    var app = express();

    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
    } else if (process.env.NODE_ENV === 'production') {
        app.use(compression());
    }

    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(methodOverride());

    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: config.sessionSecret
    }));

    app.set('views', './app/views');
    app.set('view engine', 'ejs');

    route_index(app);

    app.use(express.static('./public'));

    return app;
};