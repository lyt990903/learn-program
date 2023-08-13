/*
students.js
职责：操作文件中的数据，只处理数据，不关心业务
*/
const fs = require('fs');
const dbpath = './db.json';
/* 
获取所有学生列表
    利用回调函数
    第一个参数
        成功：null
        失败：error
    第二个参数
        成功：students数组
        失败：null
    return []
*/
exports.find = (callback) => {
    fs.readFile(dbpath, (err, data) => {
        if (err) {
            return callback(err);
        }
        callback(null, JSON.parse(data).students);
    })
}

/*
添加保存学生
    先读文件，转成对象，再修改对象，最后写入文件
*/
exports.save = (student, callback) => {
    fs.readFile(dbpath, 'utf8', (err, data) => {
        if (err) {
            return callback(err);
        }
        // 数据转换与数据更新
        let students = JSON.parse(data).students;
        student.id = students[students.length - 1].id + 1;
        students.push(student);
        console.log(students);
        //再将数据存入db
        let fileData = JSON.stringify({
            students
        });
        fs.writeFile('./db.json', fileData, (err) => {
            if (err) {
                return callback(err);
            }
            callback(null);
        })
    })
}

/* 
更新学生
    首先findById渲染edit界面
    之后updateById修改db.json文件
    首先读取文件，找出id符合的对象
    利用遍历替换对象的方式替换
*/
exports.findById = (id, callback) => {
    fs.readFile(dbpath, 'utf8', (err, data) => {
        if (err) {
            return callback(err);
        }
        let students = JSON.parse(data).students;
        let oldstudent = students.find((item) => (item.id === parseInt(id)));
        callback(null, oldstudent);
    })
}

exports.updateById = (newstudent, callback) => {
    fs.readFile(dbpath, 'utf8', (err, data) => {
        if (err) {
            return callback(err);
        }
        let students = JSON.parse(data).students;
        // 找到要修改的学生
        let oldstudent = students.find((item) => (item.id === parseInt(newstudent.id)));
        // 先把id转为int
        newstudent.id = parseInt(newstudent.id);
        // 遍历拷贝学生
        for (let prop in newstudent) {
            oldstudent[prop] = newstudent[prop];
        }
        let fileData = JSON.stringify({
            students
        });
        // 重新写入
        fs.writeFile('./db.json', fileData, (err) => {
            if (err) {
                return callback(err);
            }
            callback(null);
        })
    })
}

/*
删除学生
    首先findById查找
    之后deleteById删除
*/
exports.deleteById = (id, callback) => {
    fs.readFile(dbpath, 'utf8', (err, data) => {
        if (err) {
            return callback(err);
        }
        let students = JSON.parse(data).students;
        // 查找要删除的对象
        let deletestudent = students.find((item)=>(item.id === parseInt(id)));
        // 获取其index
        let index = students.indexOf(deletestudent);
        // 从index开始删除一个对象（即删除id对象）
        students.splice(index, 1);
        let fileData = JSON.stringify({
            students
        })
        fs.writeFile(dbpath, fileData, (err) => {
            if(err){
                return callback(err);
            }
            callback(null);
        })
    })
}