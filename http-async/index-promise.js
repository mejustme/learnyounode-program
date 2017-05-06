var http = require('http');

function getData(url)  {
    // 注意 return
    return new Promise(function (resolve, reject) {
        http.get(url,function (response) {
            response.setEncoding('utf8');
            if(response.statusCode !== 200){
                console.error('请求错误，返回状态码为${response.statusCode}');
                response.resume();
                reject();
                return;
            }

            var allStr = '';
            response.on('data',function (str) {
                allStr += str;
            });
            response.on('end', function () {
                resolve(allStr);
            });
        })
    });
}
var promises = process.argv.slice(2,process.argv.length).map(function (url) {
    return getData(url);
});

Promise.all(promises).then(function (results) {
    results.forEach(value => {
        console.log(value);
    })
});