"use strict";
// export三种方法  单独导出，批量导出，导出默认
Object.defineProperty(exports, "__esModule", { value: true });
//单独导出
exports.prop = "123";
function getData() {
    console.log("获取数据");
}
exports.getData = getData;
function getDate() {
    console.log("获取时间");
}
exports.getDate = getDate;
function getName() {
    console.log("获取姓名");
}
//导出默认（一个文件只能用一次）
exports.default = getName;
