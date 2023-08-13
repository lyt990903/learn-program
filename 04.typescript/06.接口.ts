// 属性类接口

    // ts自定义单个方法传入参数对json进行约束
    function returnName(name:{name:string}):void{
        console.log(name);
    }

    returnName({
        "name":"张三",
    })
    // 利用接口，对批量方法传入参数进行约束
    interface fullName{
        firstName:"张";
        secondName:"三";
    }
    function returnName1(name:fullName){
        console.log(name.firstName+name.secondName);
    }
    // 严格约束
    returnName1({
        firstName:"张",
        secondName:"三",
    })
    /*  少属性，多属性，属性名错误  均报错
    returnName1({
        firstName:'张',
    })
    returnName1({
        first: '张',
        secondName:'三',
    })
    returnName1({
        sex:'男'，
        firstName: '张',
        secondName: '三',
    })
    */

    //接口，可选属性
    interface fullNames{
        firstName:string;
        secondName?:string;
    }

// 加密的函数类型接口
    // 对传入参数以及返回值进行约束     批量约束
    interface encrypt{
        (key:string,value:string):string;
    }

    var md5:encrypt = function(key:string,value:string):string{
        return `${key}+${value}`;
    }

    console.log(md5('张','三'));

// 可索引接口：数组，对象的约束（不常用）

    // 对数组的约束
    interface UserArray{
        [index:number]:string;
    }
    var arr:UserArray = ['123','456'];
    // 对对象的约束
    interface UserObj{
        [index:string]:string;
    }
    var obj:UserObj = {name:"没头脑"};

// 类类型接口：对类的约束  和抽象类有点相似

    interface Animals{
        name:string;
        // 接口方法参数可以不实现
        eat(food:string):void;
    }

    class Dogs implements Animals{
        name:string;
        eat():void{
            console.log(`${this.name}吃粮食`);
        }
    }
    class Cats implements Animals{
        name: string;        
        eat(food: string): void {
            console.log(`${this.name}吃${food}`);
        }
    }

// 接口的扩展  接口继承接口
interface Persons extends Animals{
    work():void;
}

class worker implements Persons{
    name:string;
    constructor(name:string){
        this.name = name;
    }
    eat():void{
        console.log(this.name+"吃东西");
    }
    work():void{
        console.log(this.name+"做工作");
    }
}
class porgrammer extends worker{
    constructor(name:string){
        super(name);
    }
    codeing():void{
        console.log(this.name+"写代码");
    }
}