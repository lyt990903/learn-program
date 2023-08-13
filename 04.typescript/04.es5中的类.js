// es5中的类

    // 构造方法
    function Person() {
        // 属性
        this.name = "张三";
        this.age = 20;
        // 方法
        this.run = function () {
            console.log(this.name + "在跑步");
        };
    }
    // 原型链（所有实例化对象都知道的属性和方法）
        // 属性
        Person.prototype.sex = "男";
        // 静态属性
        Person.static = "静态属性";
        // 方法
        Person.prototype.work = function () {
            console.log(this.name + "在工作");
        };
        // 静态方法
        Person.staticMethod = function(){
            console.log("静态方法");
        };
        // 实现
        var p = new Person();
        p.work();
        Person.work();
        alert(Person.sex);

    // 继承

        // 对象冒充继承
        function Child() {
            Person.call(this);
        }

            // 对象冒充可以继承父类中的属性和方法（只能继承构造函数中的，不能继承原型链的）
            var child = new Child();
            child.run();
            /* child.work();  报错 */

        // 原型链实现继承
        function Child1() {

        }
        Child1.prototype = new Person();

            // 原型链既可以继承构造函数中的，也可以继承原型链中的
            var child1 = new Child1();
            child1.run();
            child1.work();

            // 原型链继承，实例化子类时无法给父类传参
            function Person1(name, age) {
                this.name = name;
                this.age = age;
                this.run = function () {
                    console.log(this.name + "在跑步");
                };
            }

            function Child2(name, age) {

            }
            Child2.prototype = new Person1();

            var child2 = new Child2("赵四", 20);
            child2.run(); /* 输出undefined在跑步 */

        // 原型链+对象冒充的组合继承模式
        function Child3(name, age) {
            Person1.call(this, name, age);
        }
        Child3.prototype = new Person1();

        var child3 = new Child3("赵四", 20);
        child3.run(); /* 输出赵四在跑步 */

        // 原型链+对象冒充继承的另一种方法
        function Child4() {
            Person.call(this);
        }
        Child4.prototype = Person.prototype;