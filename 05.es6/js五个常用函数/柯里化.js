// 参数够了就执行，参数不够就返回一个函数，之前的参数存起来，直到够了为止
function foo(a, b, c) {
    console.log(`${a}+${b}+${c}`);
}

function curry(func) {
    // 获取func函数的参数列表长度
    let paramLength = func.length;
    return function curryInside() {
        // 获取柯里化函数的参数
        let args = [...arguments];
        // 如果参数不够，返回函数继续获取参数
        if (args.length < paramLength) {
            return function(){
                // 获取最新的参数
                let argsInside = [...arguments];
                // 返回目前获取的所有参数的curryInside方法 
                // return curryInside.apply(this, args.concat(argsInside));
                return curryInside(...args,...argsInside);
            };
        }
        // 如果参数够了则运行func
        else {
            // return func.apply(this, args);
            return func(...args);
        }
    }
}

curry(foo)(1)(2)(3)
/*
curry(foo)(1) --> 
curryInside(1){
    function(){
        arg
        return curryInside();
    }
} -->
function(){
    argsInside = [];
    curryInside(...[1]);
}


    curry(foo)(1)(2) -->
    function(2){
        argsInside = [2];
        curryInside(...[1, 2]);
    } -->
    curryInside(1,2){
        function(){
            argsInside = []
            curryInside(...[1, 2]);
        }
    } -->
    function(){
        argsInside = []
        curryInside(1, 2...);
    }


        curry(foo)(1)(2)(3) -->
        function(3){
            argsInside = [3];
            curryInside(...[1,2,3]);
        } -->
        curryInside(1,2,3){
            func(1,2,3)
        }

*/
curry(foo)(1,2)(3)
curry(foo)(1,2,3)
