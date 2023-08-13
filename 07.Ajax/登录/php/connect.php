<?php
    $host = "127.0.0.1";
    $user = "root";
    $pwd = "root";
    $dbname = "phplearn";
    $db = new mysqli($host, $user, $pwd, $dbname);
    //var_dump($db);
    if($db->connect_error <> 0){
        die("数据库连接失败：".$db->connect_error);
    }
    $db->query("SET NAMES UTF8");
?>