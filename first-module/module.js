var path = require('path');
var fs = require('fs');

module.exports = function (dirPath, ext, callback) {
    fs.readdir(dirPath, function (error, arr) {
        var outArr = [];
        if(error){
           return callback(error);
        }{
            arr.forEach(function (value) {
                if(path.extname(value) == '.'+ext){
                    outArr.push(value);
                }
            });
            callback(null, outArr);
        }
    })
};