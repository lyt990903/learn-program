const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/my_test")

const schema = mongoose.Schema;

const stuSchema = new schema({
    name: String,
    age: Number,
    gender: {
        type: String,
        default: "male"
    }
});

const stuModel = mongoose.model("student", stuSchema);

// 有了Model,就可以对数据库中的文档进行增删改查

/*
    Model.create(doc(s),{callback})
    - 参数
        doc(s) 用来创建一个或多个文档
        callback 当操作完成后调用的回调函数
*/
stuModel.create({
    name: "小红",
    age: 18,
    gender: "female"
}, {
    name: "小刚",
    age: 18,
    gender: "male"
}, function (err) {
    if (!err) {
        console.log("create success!");
    } else {
        console.log("create failed");
    }
})

/*
    Model.find(conditions, [projection], [options], [callback])
    - 查询所有符合条件的文档,返回数组
    Model.findById(id, [projection], [options], [callback])
    - 根据文档的id属性查询文档
    Model.findOne([conditions], [projection], [options], [callback])
    - 查询第一个符合条件的文档,返回文档对象

    - 参数
        conditions 查询的条件
        projection 投影
        options 查询选项(skip,limit)
        callback(err, doc(s))) 回调函数,查询结果通过回调函数返回
*/
stuModel.find({
    age: 18
}, "name age -_id", {
    skip: 1,
    limit: 1
}, function (err, docs) {
    if (!err) {
        console.log(docs);
    }
})

/*
    Model.update(conditions, doc, [options], [callback])
    Model.updateMany(conditions, doc, [options], [callback])
    Model.update(conditions, doc, [options], [callback])
    - 用来修改一个或多个文档
    - 参数:
        conditions 查询条件
        doc 修改后对象
        options 配置参数
        callback 回调函数
*/
stuModel.update({
    name: "小明"
}, {
    $set: {
        age: 19
    }
}, function (err) {
    if (!err) {
        console.log("update success!");
    } else {
        console.log("update error!");
    }
})

/*
    Model.remove(conditions, [callback])
    Model.deleteOne(conditions, [callback])
    Model.deleteMany(conditions, [callback])
    - 参数
        conditions 查询条件
        callback 回调函数
*/
stuModel.remove({
    name: "小刚"
}, function (err) {
    if (!err) {
        console.log("remove success!");
    } else {
        console.log("remove failed!");
    }
})

/*
    Model.count(conditions, [callback])
*/