var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2],function (error, arr) {
    if (error) return console.error(error.message);
    arr.forEach(function (value) {
        if(path.extname(value) == '.'+process.argv[3]){
            console.log(value)
        }
    })
});