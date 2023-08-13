<?php
    $host = 'localhost';
    $user = 'root';
    $pwd = 'root';
    $dbname = 'phplearn';
    $db = new mysqli($host, $user, $pwd, $dbname);
    //var_dump($db);
    //检查数据库连接是否成功
    if($db->connect_errno <> 0){
        die('数据库连接失败：'.$db->connect_error);
    }
    //设定数据库数据传输的编码
    $db->query("SET NAMES UTF8");
?>