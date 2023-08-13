/*
    url
    type:post/get
    data
    success
*/
function Ajax_(option) {
    //创建异步对象
    var xhr = new XMLHttpRequest();
    //判断是否为get方法
    if (option.type == "GET" && option.data) {
        option.url += "?";
        option.url += option.data;
        option.data = null;
    }
    //设置请求头
    xhr.open(option.type, option.url);
    //判断是否为POST
    if (option.type == "POST" && option.data) {
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    }
    //回调函数
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var header = xhr.getResponseHeader("Content-Type");
            if (header.indexOf("json") != -1) {
                // console.log(JSON.parse(xhr.responseText));
                option.success(JSON.parse(xhr.responseText));
            } else if (header.indexOf("xml") != -1) {
                // console.log(xhr.responseXML);
                option.success(xhr.responseXML);
            } else {
                // console.log(xhr.responseText);
                option.success(xhr.responseText);
            }
        }
    };
    //发送请求
    xhr.send(option.data);
}