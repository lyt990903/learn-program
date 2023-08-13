// 触发事件后，执行定时器(事件)并将“节流阀”关闭，再次触发不执行定时器。当事件成功执行后，打开“节流阀”才可再次执行定时器

function foo() {
    console.log("foo");
}

function throttle(func, wait) {
    // 初始化节流阀开启
    if(typeof flag === "undefined"){
        flag = true;
    }
    return function () {
        // 判断，如果节流阀处于关闭状态则不执行。
        if (!flag) {
            return;
        } else {
            // 关闭节流阀
            flag = false;
            setTimeout(function () {
                func(...arguments);
                // 执行完毕后开启节流阀
                flag = true
            }, wait)
        }
    }
}

setInterval(function () {
    throttle(foo, 2000)();
}, 500)

// if (typeof flag !== "undefined") {
//     console.log("存在");
//     console.log(typeof flag);
// }
// else{
//     console.log("不存在");
//     console.log(typeof flag);
// }

// (function(){
//     flag = 1;
//     console.log("赋值完成！");
// })()

// console.log(flag);