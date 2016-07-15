var fs = require('fs');

module.exports = {
    printNginx: function(path) {
        fs.readFile(path, 'utf-8', function(err, data) {
            if (err) {
                return console.log(err);
            }

            console.log(data);
        });
    }
};