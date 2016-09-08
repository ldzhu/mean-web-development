var ctrl_user = require('../controllers/user.server.controller');

module.exports = function(app) {
    app.route('/users')
        .all(function(req, res, next) {
            console.log('处理users请求...');
            next();
        })
        .post(ctrl_user.create)
        .get(ctrl_user.list);

    app.route('/user/:userId')
        .get(ctrl_user.read);

    app.param('userId', ctrl_user.userById);
};