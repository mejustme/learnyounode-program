var fun = require('./module');
var dirPath = process.argv[2];
var ext = process.argv[3];
fun(dirPath, ext, function(error,data){
    if(error){
        console.log(error)
    }else {
        data.forEach(function (value) {
            console.log(value)
        })
    }
})