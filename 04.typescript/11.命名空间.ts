// 命名空间和模块的区别
//命名空间：内部模块，主要是用于组织代码，避免命名冲突
//模   块：ts外部模块的简称，侧重代码的复用，一个模块中可以有多个命名空间

namespace A{
    class Animal{
        name:string;
        constructor(name:string){
            this.name = name;
        }
        eat(name:string):void{

        };
    }

    //在命名空间外部使用需要导出
    export class Cat extends Animal{
        name:string;
        constructor(name:string){
            super(name);
        }
        eat(name:string):void{
            console.log(`${this.name}吃东西`);
        }
    }

    //内部实例化
    var catt = new Cat("小猫");
}

//外部实例化
var CAT = new A.Cat("小猫");

namespace B {
    class Animal {
        name: string;
        constructor(name: string) {
            this.name = name;
        }
        // 区别于A空间中的eat方法
        eat(name: number): void {

        };
    }
}