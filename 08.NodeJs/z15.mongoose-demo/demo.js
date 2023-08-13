// getting-started.js
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {
    useNewUrlParser: true
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
});

var kittySchema = new mongoose.Schema({
    name: String
});

// 创建模型
var Kitten = mongoose.model('Kitten', kittySchema);

// 新建实例
var silence = new Kitten({
    name: 'Silence'
});
console.log(silence.name); // 'Silence'

//永久保存
silence.save(function(err){
    if(err){
        return console.error(err)
    }
    return console.log('meow');
})