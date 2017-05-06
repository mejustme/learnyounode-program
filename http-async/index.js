var http = require('http');
var count = 0;
var urlCount = process.argv.length - 2;
var arr = new Array(urlCount);
function getData(url, index)  {
    http.get(url,function (response) {
        response.setEncoding('utf8');

        if(response.statusCode !== 200){
            console.error('请求错误，返回状态码为${response.statusCode}');
            response.resume();
            return;
        }

        var allStr = '';
        response.on('data',function (str) {
            arr[index] = (arr[index] || '') +str;
        });
        response.on('end', function () {
            count++;
            if(count == urlCount){
                arr.forEach(value => {
                    console.log(value);
                })
            }
        });
    })
}
for(var i=0; i<urlCount; i++){
    getData(process.argv[i+2],i);
}