// 安装下载mongoose
// npm i -S mongoose

// 1.引用模块
const mongoose = require('mongoose');

// 2.连接数据库,{useMongoClient:true}使用mongo客户端,在5.x后不再需要
mongoose.connect("mongodb://localhost/my_test");

// 3.数据库连接回调函数
mongoose.connection.once("open",function(){
    console.log("mongo connected");
})

// 4.断开连接
mongoose.disconnect();

// 5/断开连接回调函数
mongoose.connection.once("close",function(){
    console.log("mongo closed");
})
