var http = require('http');
http.get(process.argv[2],function (response) {
    response.setEncoding('utf8');

    if(response.statusCode !== 200){
        console.error('请求错误，返回状态码为${response.statusCode}');
        response.resume();
        return;
    };

    var allStr = '';
    response.on('data',function (str) {
        allStr += str;
    });
    response.on('end', function () {
        console.log(allStr.length);
        console.log(allStr);
    })
});