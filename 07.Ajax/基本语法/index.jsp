<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>Examples</title>
    <meta name="description" content="">
    <meta name="keywords" content="">
    <script>
        window.onload = function () {
            //1. 获取a节点，并为其添加onlick响应函数
            document.getElementsByTagName("a")[0].onlick = function () {

                //3. 创建一个XMLHttpRequest对象
                var request = new XMLHttpRequest();
                //4.准备发送请求数据：url
                var url = this.href;
                var method = "GET";
                //5. 调用XMLHttpRequest对象的open方法
                request.open(method, url);
                //6. 调用XMLHttpRequest对象的send方法
                request.send(null);
                //7. 为XMLHttpRequest对象添加onreadystatechange响应函数

                //8. 判断相应是否完成：XMLHttpRequest对象的readyState属性值为4的时候

                //9. 再判断响应是否可用：XMLHttpRequest对象state属性值为200

                //10. 打印响应结果：responseText

                //2.取消a节点的默认行为
                return false;
            }
        }
    </script>
</head>

<body>
    <a href="helloAjax.txt">HelloAjax</a>
</body>

</html>