// 类型，接口，类，泛型综合使用--TypeScript封装统一操作Mysql，Mongodb，Mssql的底层库
// 类MyDb 操作sql数据库的类
var MyDb = /** @class */ (function () {
    function MyDb() {
        console.log("数据库连接语句");
    }
    MyDb.prototype.add = function (info) {
        console.log("插入语句" + info);
        return true;
        throw new Error("Method not implemented.");
    };
    MyDb.prototype.delet = function (id) {
        console.log("删除语句" + id);
        return true;
        throw new Error("Method not implemented.");
    };
    MyDb.prototype.get = function (id) {
        console.log("查询语句" + id);
        throw new Error("Method not implemented.");
    };
    MyDb.prototype.update = function (info, id) {
        console.log("更新语句" + id + "改为" + info);
        return true;
        throw new Error("Method not implemented.");
    };
    return MyDb;
}());
// 操作用户表DbUser 定义一个User类和数据表做映射
var DbUser = /** @class */ (function () {
    function DbUser() {
    }
    return DbUser;
}());
var user = new DbUser();
user.username = "admin";
user.password = "123456";
var dbs = new MyDb();
dbs.add(user);
// ...
