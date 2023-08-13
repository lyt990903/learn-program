/*
装饰器：是一种特殊类型的声明，能够附加到声明，方法，属性或参数上，可以修改类的行为。
通俗：装饰器是一个方法，可以注入到类，方法，属性参数上来扩展类，属性，方法，参数的功能
常见：类装饰器，属性装饰器，方法装饰器，参数装饰器
写法：普通装饰器（无法传参）；装饰器工厂（可传参）
*/

//1.类装饰器：在类声明前声明（紧靠着类声明），类装饰器应用于类构造器，可以用来监视，修改或替换类定义

namespace A_1 {
    // 普通装饰器声明（不修改类结构的情况下，添加功能）
    function logClass(params: any) {
        //params即为当前装饰的类
        console.log(params);

        params.prototype.newProp = "动态生成的属性";
        params.prototype.nweMethod = function (): void {
            console.log("动态生成的方法");
        }
    }
    // 类声明
    @logClass
    class HttpClient {
        constructor() {}
        getDate() {}
    }

    var http: any = new HttpClient();
    console.log(http.newProp); //http不规定为any类型时报错
    http.nweMethod(); //http不规定为any类型时报错

    // 装饰器工厂声明
    function logClassFactory(params: string) {
        return function (target: any) {
            console.log(target); // target为修饰的类
            console.log(params); // params为传入参数

            // 使用传入的参数动态生成属性
            target.prototype.Name = params;
        }
    }
    // 类声明
    @logClassFactory("张三")
    class HttpsClient {
        constructor() {}
        getData() {}
    }

    var https: any = new HttpsClient();
    console.log(https.Name);
}

namespace A_2 {
    // 装饰器重载构造方法，修改方法
    function logClass(target: any) {
        return class extends target{
            apiURL:any = "修改之后的数据";
            getData():void{
                this.apiURL += "---";
                console.log(this.apiURL);
            }
        }
    }

    @logClass
    class HttpClient {
        apiURL:string | undefined;
        constructor(){
            this.apiURL = "www.baidu.com";
        }
        getData():void{
            console.log(this.apiURL);
        }
    }

    var http:any = new HttpClient();
    http.getData();
}

// 2.属性装饰器：会在运行时当作函数被调用，传入下列2个参数：
/*
        2.1对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
        2.2成员的名字
*/
namespace B_1{
    function logProperty(params:any){
        // target为修饰类，attr为修饰属性（在谁上面修饰谁）
        return function(target:any,attr:any){
            console.log(target);
            console.log(attr);
            target[attr] = params;
        }
    }
    class HttpClient{
        @logProperty("xxxx")
        url:string | undefined;
        getData():void{
            console.log(this.url);
        }
    }

    var http = new HttpClient();
    http.getData();
}

// 3.方法装饰器：被应用到方法的属性描述符上，可以用来监视，修改或者替换方法定义。还可以拓展属性和方法(和类装饰器一样)
/*
        传入三个参数
        3.1对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
        3.2成员的名字
        3.3成员的属性描述符
*/
namespace C_1{
    // 方法选择器拓展属性和方法(和类装饰器一样)
    function get(params:any){
        return function(target:any,methodName:any,desc:any){
            console.log(target);
            console.log(methodName);
            console.log(desc.value);
            target.url = "xxxx";
            target.run = function():void{
                console.log("run");
            }
        }
    }
    class HttpClient{
        apiURL:string | undefined;
        @get("www.baidu.com")
        getData():void{
            console.log("getData方法");
        }
        getDate():void{
            console.log("替换前");
        }
    }
}

namespace C_2{
    // 方法修饰器更改方法
    function change(params: any) {
        return function (target: any, methodName: any, desc: any) {
            // console.log(target);
            // console.log(methodName);
            // console.log(desc.value);
            var oldMethod = desc.value;//先保存原方法
            desc.value = function(...args:any[]):void{
                args = args.map((value)=>{
                    return String(value);
                })
                console.log(args);
                oldMethod.apply(this,args);//this指新的方法，args指参数
            }
        }
    }
    // 方法修饰器替换方法
    function replace(params: any) {
        return function (target: any, methodName: any, desc: any) {
            // console.log(target);
            // console.log(methodName);
            // console.log(desc.value);
            desc.value = function():void{
                console.log("替换后");
            }
        }
    }
    class HttpClient {
        apiURL: string | undefined;
        @change("www.baidu.com")
        getData(): void {
            console.log("getData方法");
        }
        @replace("www.baidu.com")
        getDate(): void {
            console.log("替换前");
        }
    }
    var http:any = new HttpClient();
    http.getData(132,"xxx");
    http.getDate();
}

// 4.方法参数装饰器：运行时当作函数被调用，为类的原型增加一些元素数据（不常用）
/*
        传入3个参数
        4.1对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
        4.2方法的名字
        4.3参数在函数参数列表中的索引
*/
namespace D_1{
    function logParams(params:any){
        return function(target:any,methodName:any,paramsIndex:any){
            console.log(target);
            console.log(methodName);
            console.log(paramsIndex);
        }
    }
    class HttpClient{
        getData(@logParams("uuid") uuid:any){
            
        }
    }
    var http:any = new HttpClient();
    http.getData(123);
}

/*
不同类型顺序：属性装饰器->方法装饰器->方法参数装饰器->类装饰器
装饰器执行顺序：同种类型，从后往前执行
*/