var ctrl_user = require('../controllers/user.server.controller');

module.exports = function(app) {
    app.route('/users')
        .all(function(req, res, next) {
            console.log('users hahaha');
            next();
        })
        .post(ctrl_user.create);
};