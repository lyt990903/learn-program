const express = require('express');
const router = require('./router');
const bodyParser = require('body-parser');

const app = express();

app.use('/node_modules', express.static('./node_modules/'));
app.use('/public', express.static('./public/'));

// 模板引擎和中间件一定要配置在挂载路由之前
app.engine('html', require('express-art-template'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))
// parse application/json
app.use(bodyParser.json())

//app挂载路由
app.use(router);

app.listen(3000, () => {
    console.log('Server Start On 3000');
})