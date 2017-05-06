var fs = require('fs');
var file = fs.readFile(process.argv[2],{
    encoding: 'utf8'
}, function (error ,file) {
    console.log(file.split('\n').length-1); // 为啥-1
});
