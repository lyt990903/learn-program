// export三种方法  单独导出，批量导出，导出默认

//单独导出
export var prop = "123";

function getData(): void {
    console.log("获取数据");
}

function getDate(): void {
    console.log("获取时间");
}

function getName(): void {
    console.log("获取姓名");
}

//批量导出
export {getData,getDate};

//导出默认（一个文件只能用一次）
export default getName;