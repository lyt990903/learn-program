// 把类当作泛型类
class User {
    username: string | undefined;
    password: string | undefined;
}

class MySqlDb < T > {
    add(info: T): void {
        console.log(info);
    }
}

var u = new User();
u.username = "admin";
u.password = "123456";
var db1 = new MySqlDb < User > ();  //约束传入类
/*  
var db1 = new MySsqlDb();
db1.add("123213");
不约束传入类
*/
db1.add(u);

class ArticleCate {
    title: string | undefined;
    desc: string | undefined;
    status: number | undefined;
    constructor(params: {
        title: string,
        desc: string,
        status ? : number
    }) {
        this.title = params.title;
        this.desc = params.desc;
        this.status = params.status;
    }
}

var art = new ArticleCate({
    title: "title",
    desc: "desc"
})
art.status = 1;
var db2 = new MySqlDb<ArticleCate>();
db2.add(art);
