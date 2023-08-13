/*
//exports是模块公开的接口
exports.world = function(){
    console.log('Hello World');
};
*/

//封装对象
function Hello(){
    var name;
    this.setName = function(tname){
        name = tname;
    };
    this.sayHello = function(){
        console.log('Hello ' + name);
    };
}
module.exports = Hello;
