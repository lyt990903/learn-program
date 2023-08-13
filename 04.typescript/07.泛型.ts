// 只能返回string类型
function returnString():string{
    return "string";
}

// any没有类型检验

// 泛型：可以支持不确定的类型   要求：传入参数和返回参数一致

// 泛型函数

    // 同时可以返回string 和 numer 类型
    // T表示泛型，具体什么类型是调用这个方法的时候决定的
    function returnT<T>(value: T): T {
        return value;
    }

    returnT<number>(1);
    returnT<string>("123");

// 泛型类：最小堆，输入number返回number，输入string返回string

    class List<T>{
        public list:Array<T>;
        constructor(){
            this.list = [];
        }
        add(value:T):void{
            this.list.push(value);
        }
        getMin():T{
            var minNum:T = this.list[0];
            for(var i = 0;i < this.list.length;i++){
                if(this.list[i]<minNum)
                    minNum = this.list[i];
            }
            return minNum;
        }
    }

    var m = new List<number>();
    m.add(1);
    m.add(2);
    alert(m.getMin());

    var n = new List<string>();
    n.add('a');
    n.add('b');
    alert(n.getMin());

// 泛型接口
    // 方法1
    interface Config{
        <T>(value:T):T;
    }
    var getData: Config = function<T>(value:T):T{
        return value;
    }

    getData<number>(1);
    getData<string>("1");

    // 方法2
    interface Config1<T>{
        (value:T):T;
    }
    function getData1<T>(value:T):T{
        return value;
    }

    var myGetData:Config1<string> = getData1;
    myGetData("1");
    var myGetData1:Config1<number> = getData1;
    myGetData1(1);