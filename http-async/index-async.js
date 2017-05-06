var http = require('http');
var async = require('async');
function getData(url, callback)  {
    http.get(url,function (response) {
        response.setEncoding('utf8');

        if(response.statusCode !== 200){
            console.error('请求错误，返回状态码为${response.statusCode}');
            response.resume();
            callback(null);
            return;
        }

        var allStr = '';
        response.on('data',function (str) {
            allStr += str;
        });
        response.on('end', function () {
            callback(null, allStr);
        });
    })
}
async.map(process.argv.slice(2,process.argv.length), getData, function(err, results) {
    results.forEach(value => {
        console.log(value);
    })
});