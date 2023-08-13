//引入模块
var Event = require('events');
var event = new Event();

/*
on：添加事件（事件队列尾部添加）
once：添加只能触发一次便失效的事件（事件队列尾部添加）
prependListener()：添加事件（添加到事件队列头部）
prependOnceListener()：添加只能触发一次便失效的事件（事件队列头部添加）
emit()：触发事件
removeListener()：删除某个事件
*/

/*
on(eventName,listener[,arg1][,arg2]...)
eventName：注册事件名字
listener：事件处理函数
arg：参数
*/
event.on('test', function () {
    console.log('I am coming01');
});
event.on('test', function () {
    console.log('I am coming02');
});
event.prependOnceListener('test', function () {
    //只执行一次，优先执行
    console.log('I am coming03');
});

console.log('执行第一次');
event.emit('test');
console.log('执行第二次');
event.emit('test');