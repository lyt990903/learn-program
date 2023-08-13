// 每次触发都会重新执行定时器(事件) -- 一直触发则一直不执行，直至触发后等待执行为止

function foo() {
    return console.log("foo");
}

function debounce(func, wait) {
    if(typeof timeout === "undefined"){
        timeout = null;
    }
    return function(){
        if(timeout){
            clearTimeout(timeout);
        }
        else{
            timeout = setTimeout(() => {
                timeout = null;
                func(...arguments);
            },wait)
        }
    }
}

setInterval(() => {
    debounce(foo,2000)();
},3000)