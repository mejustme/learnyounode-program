var http = require('http');
//  http.get 该方法与 http.request() 唯一的区别是它设置请求方法为 GET 且自动调用 req.end()
var clientRequest = http.get(process.argv[2],function (response) {
    // response 是 incomingMessage实例 ,继承 Stream
   if(response.statusCode !== 200){
       console.log('返回错误，状态码为${response.statusCode}');
       response.resume();
       return;
   }else {
       response.setEncoding('utf8');
       response.on('data', function (str) {
           console.log(str);
       });
       response.on('error', function (error) {
            console.error(error);
       });

       // response.on('data', function (chunk) {
       //     console.log(chunk.toString());
       // })
   }
});

// clientRequest 是 ClientRequest 实例,  继承了 stream.Writable 类
clientRequest.on('error', (e) => {
    console.log(`错误: ${e.message}`);
});