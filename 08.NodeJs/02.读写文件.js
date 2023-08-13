/*读取文件*/

// 1.使用require方法加载fs核心模块
const fs = require('fs');
// 2。读取文件，第一个参数是读取的文件路径，第二个参数是一个回调函数
// 回调函数参数：error(成功为null),data(失败为null)
fs.readFile('./02.hello.txt',(error,data) => {
    console.log(data);
    console.log(data.toString());
})

/*写入文件*/

// 3.写入文件，第一个参数是文件路径，第二个参数是写入内容，第三个参数是回调函数
// 回调函数参数：只有error
fs.writeFile('./hello.txt',"修改后的Hello",(error) => {
    if(error){
        console.log(error);
    }
    else{
        console.log("写入成功！");
    }
})