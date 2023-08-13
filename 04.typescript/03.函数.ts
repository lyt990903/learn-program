//es5方法
    // function fun1(){
    //     console.log('1');
    // }
    // var fun2 = function(){
    //     console.log('2');
    // }

//ts方法
    //普通函数
    function fun1():string {
        return "123";
    }
    //匿名函数
    var fun2 =function():string {
        return "123";
    }

    //定义方法传参
    function Params(name:string,age:number):string {
        return `我叫${name},我今年${age}岁`;
    }

    //方法可选参数（可选参数必须配置到参数列表的最后面！！！）
    //es5形参和实参可以不一样，但ts中必须一样，如果不一样就需要配置可选参数
    function Params1(name:string,age?:number):string {
        if(age){
            return `我叫${name},我今年${age}岁`;
        }
        else{
            return `我叫${name},我的年龄保密`;
        }
    }

    //默认参数
    //es5无法设置默认参数，es6和ts都可以设置默认参数
    function Params2(name:string,age:number=20):string {
        return `我叫${name}，我今年${age}岁`;
    }
    //alert(Params2("zahangsan"));   //输出我叫zhangsan，我今年20岁

    //剩余参数
        //三点运算符 接收形参传值,把参数列表传入result数组中
        function sum(...result:number[]):number {
            var sum:number = 0;
            for(var i=0;i<result.length;i++){
                sum += result[i];
            }
            return sum;
        }
        //alert(sum(1,2,3,4));  //输出10

        function sum1(a:number,...result: number[]): number {
            var sum:number = a;
            for (var i = 0; i < result.length; i++) {
                sum += result[i];
            }
            return sum;
        }
        //alert(sum(1,2,3,4));  //输出10

    //函数重载 为了兼容es5和es6，其表现形式与java不同
    //es5出现重名函数时替换

        //参数类型不同
        function getInfo(name:string):string;
        function getInfo(age:number):string;
        function getInfo(param:any):any{
            if(typeof(param) === "string"){
                return `我叫${param}`;
            }
            else if(typeof(param) === "number"){
                return `我今年${param}岁`;
            }
        }

        //参数个数不同
        function getInfo1(name:string):string;
        function getInfo1(name:string,age:number):string;
        function getInfo1(name:any,age?:any):any {
            if(age){
                return `我叫${name}，我今年${age}岁`;
            }
            else{
                return `我叫${name}`;
            }
        }
    //箭头函数 es6
    //this指向的问题    箭头函数中的this指向上下文
        //es5
        setTimeout(function(){
            alert("run");
        },1000);

        //ts
        setTimeout(()=>{
            alert("run");
        },100)