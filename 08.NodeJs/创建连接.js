//用require指令载入Node,js模块
var http = require("http");
//创建服务器
http.createServer(function (request, response) {
    /*
    发送 HTTP 头部
    HTTP 状态值：200：OK
    内容类型：text/plain
    */
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    //发送响应消息
    response.end('Hello World');
}).listen(8888);//使用listen绑定8888端口
//终端打印消息
console.log('Server running at http://localhost:8888/');