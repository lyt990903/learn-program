// 把类当作泛型类
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var MySqlDb = /** @class */ (function () {
    function MySqlDb() {
    }
    MySqlDb.prototype.add = function (info) {
        console.log(info);
    };
    return MySqlDb;
}());
var u = new User();
u.username = "admin";
u.password = "123456";
var db1 = new MySqlDb(); //约束传入类
/*
var db1 = new MySsqlDb();
db1.add("123213");
不约束传入类
*/
db1.add(u);
var ArticleCate = /** @class */ (function () {
    function ArticleCate(params) {
        this.title = params.title;
        this.desc = params.desc;
        this.status = params.status;
    }
    return ArticleCate;
}());
var art = new ArticleCate({
    title: "title",
    desc: "desc"
});
art.status = 1;
var db2 = new MySqlDb();
db2.add(art);
