// 只能返回string类型
function returnString() {
    return "string";
}
// any没有类型检验
// 泛型：可以支持不确定的类型   要求：传入参数和返回参数一致
// 泛型函数
// 同时可以返回string 和 numer 类型
// T表示泛型，具体什么类型是调用这个方法的时候决定的
function returnT(value) {
    return value;
}
returnT(1);
returnT("123");
// 泛型类：最小堆，输入number返回number，输入string返回string
var List = /** @class */ (function () {
    function List() {
        this.list = [];
    }
    List.prototype.add = function (value) {
        this.list.push(value);
    };
    List.prototype.getMin = function () {
        var minNum = this.list[0];
        for (var i = 0; i < this.list.length; i++) {
            if (this.list[i] < minNum)
                minNum = this.list[i];
        }
        return minNum;
    };
    return List;
}());
var m = new List();
m.add(1);
m.add(2);
alert(m.getMin());
var n = new List();
n.add('a');
n.add('b');
alert(n.getMin());
var getData = function (value) {
    return value;
};
getData(1);
getData("1");
function getData1(value) {
    return value;
}
var myGetData = getData1;
myGetData("1");
var myGetData1 = getData1;
myGetData1(1);
