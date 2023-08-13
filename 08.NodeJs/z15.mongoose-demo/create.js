/*
    Schema --> Model --> Document
    (模式) --> (模型) --> (文档)
*/

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/my_test")
// 将Schema赋值给一个变量，为了简化代码
const schema = mongoose.Schema;

// 创建Schema对象（约束对象）
const stuSchema = new schema({
    name:String,
    age:Number,
    gender:{
        // 字段类型
        type:String,
        // 字段初始值
        default:"male"
    }
});

// 通过Schema创建一个Model
// Model代表数据库中的集合，通过Model才能对数据库进行操作
// mongoose.model(modelName,Schema)
// modelName为要映射的集合名,mongoose会自动判断名称是否为复数并转换
const stuModel = mongoose.model("student",stuSchema);

// 向数据库中插入一个文档
// Model.create(doc,function(err){ })
stuModel.create({
    name:"小明",
    age:18
},function(err){
    if(!err){
        console.log("创建成功!");
    }
    else{
        console.log("创建失败!");
    }
})