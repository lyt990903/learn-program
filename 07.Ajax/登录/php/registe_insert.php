<?php
    header('Content-Type:application/json;charset=utf-8');
    include("./connect.php");
    $registeUser = $_POST["registeUser"];
    $registePwd = $_POST["registePwd"];
    $registeInsert = "INSERT INTO login (username,pwd) VALUES ('{$registeUser}','{$registePwd}')";
    if ($db->query($registeInsert)) {
        $arrInsert = array("message"=>"注册成功","status"=>10);
    } 
    else {
        $arrInsert = array("message"=>"注册失败","status"=>20);
    }
    echo json_encode($arrInsert);
?>