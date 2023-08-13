<?php
//1.cors方法：cross origin resource sharing
//html5支持，服务器端设置header解决浏览器限制跨域问题
    header("Access-Control-Allow-Origin: *");
    echo "跨域成功！";
//2.jsonp方法：使用较普遍，
//原理：回调函数
?>
<?php
    $methodName = $_GET["callback"];
    echo $methodName."({'name':'jack'})";
?>