/*
http.require(options,callback)
options：关联数组
host：、post(默认80)、method(默认为GET)、path(请求相对于根的路径，默认是“/”)、headers(请求头内容)
callback：回调函数，需传递一个参数
*/
var http = require('http');
var options = {
    host:'localhost',
    post:8888,
};
var req = http.request(options,function(res){
    res.on("data",function(chunk){
        console.log(chunk.toString("utf-8"));
    });
    res.on("end",function(){
        console.log("---client request!---");
    });
});
req.on("error",function(err){
    console.log(err.message);
});
req.end();
/*
http.get(options,callback)是http.request方法的简化版，
唯一的区别是http.get自动将请求方法设为了GET请求，
同时不需要手动调用req.end()，
但是需要记住的是，如果我们使用http.request方法时没有调用end方法，服务器将不会收到消息。
因为http.get和http.request方法都是放回同一个http.ClientRequest对象
*/