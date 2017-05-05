var fs = require('fs');
var file = fs.readFileSync(process.argv[2],{
    encoding: 'utf8'
});
console.log(file.split('\n').length-1); // 为啥-1


// var fs = require('fs');
// var file = fs.readFileSync(process.argv[2]);
// console.log(file.toString('utf8').split('\n').length-1); // 默认 utf8 可以不写