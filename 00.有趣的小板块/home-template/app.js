const express = require('express');
const path = require('path');

const app = express();

app.use('/node_modules/',express.static(path.join(__dirname,'./node_modules/')));
app.use('/public/',express.static(path.join(__dirname,'./public/')));

app.engine('html', require('express-art-template'));

app.get('/',(req,res) => {
    res.render('index.html');
})
app.get('/histroy', (req, res) => {
    res.render('histroy.html');
})

app.listen(3000, () => {
    console.log('Node Start On 3000');
})