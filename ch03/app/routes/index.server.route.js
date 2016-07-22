var ctrl_index = require('../controllers/index.server.controller.js');

module.exports = function(app) {
    app.get('/', ctrl_index.render);
};