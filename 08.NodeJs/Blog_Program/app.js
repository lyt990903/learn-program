const express = require("express");
const session = require("express-session");

const app = express();

app.engine('html', require('express-art-template'));

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    // 隐藏cookie为不可见
    /*
    cookie: {
        secure: true
    }
    */
}))

// session在服务端，cookie在客户端
// cookie是访问session的钥匙
app.get('/',function(req,res){
    res.render('index.html',{});
    req.session.foo = 'session';
    console.log(req.session.foo);
})

app.listen(3000,function(){
    console.log("Node start on 3000");
})