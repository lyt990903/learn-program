// ts中的类定义
class Person {
    // 属性，前面省略了public关键词
    name: string;
    // 静态属性
    static sex = "男";
    // 构造函数
    constructor(name: string) {
        this.name = name;
    }
    // 函数
    run(): void {
        console.log(`${this.name}在跑步`);
    }
    getName(): string {
        return this.name;
    }
    setName(name: string): void {
        this.name = name;
    }
    // 静态函数
    static eat(): void {
        console.log(`吃东西`);
    }
}

var person = new Person("张三");
person.run(); //输出 张三在跑步
Person.eat(); //输出 吃东西

// ts中类的继承
class Child extends Person {
    name: string;
    constructor(name) {
        super(name);
    }
    run(): void {
        console.log(`子类${this.name}在跑步`);
    }
}

var child: Child = new Child("张三孩子");
child.run(); //输出 子类张三孩子在跑步
child.setName("老王孩子");
console.log(child.name); // 访问public属性


// ts中的抽象类
abstract class Animal {
    abstract type: string;
    abstract eat(): void;
}
// 子类必须实现
class Cat {
    type: string;
    eat(): void {
        console.log(`猫吃老鼠`);
    }
}

var cat: Cat = new Cat();
cat.eat();