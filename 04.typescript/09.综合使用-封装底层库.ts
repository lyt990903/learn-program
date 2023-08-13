// 类型，接口，类，泛型综合使用--TypeScript封装统一操作Mysql，Mongodb，Mssql的底层库

// 接口DBI
interface DBI < T > {
    // add,update,delet,get
    add(info: T): boolean;
    delet(id: number): boolean;
    get(id: number): Array < T > ;
    update(info: T, id ? : number): boolean;
}

// 类MyDb 操作sql数据库的类
class MyDb < T > implements DBI < T > {
    constructor() {
        console.log("数据库连接语句");
    }

    add(info: T): boolean {
        console.log("插入语句" + info);
        return true;
        throw new Error("Method not implemented.");
    }
    delet(id: number): boolean {
        console.log("删除语句" + id);
        return true;
        throw new Error("Method not implemented.");
    }
    get(id: number): T[] {
        console.log("查询语句" + id);
        throw new Error("Method not implemented.");
    }
    update(info: T, id ? : number): boolean {
        console.log("更新语句" + id + "改为" + info);
        return true;
        throw new Error("Method not implemented.");
    }

}

// 操作用户表DbUser 定义一个User类和数据表做映射
class DbUser {
    username: string | undefined;
    password: string | undefined;
}

var user = new DbUser();
user.username = "admin";
user.password = "123456";
var dbs = new MyDb<User>();
dbs.add(user);
// ...