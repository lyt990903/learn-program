<?php
    // header('Content-Type:application/json;charset=utf-8');
    include("./connect.php");
    $loginUser = $_POST["loginUser"];
    $loginPwd = $_POST["loginPwd"];
    if($loginUser == null && $loginPwd == null){
        $arr = array("message"=>"用户名或密码为空","status"=>3);
        echo json_encode($arr);
        exit;
    }
    $checkQuery = "SELECT FROM login WHERE username={$loginUser} AND pwd={$loginUser}";
    $checkResult = $db->query($checkQuery);
    if($checkResult != null){
        $arr = array("message"=>"登陆成功","status"=>1);
    }
    else{
        $arr = array("message"=>"没有该用户","status"=>2);
    }
    echo json_encode($arr);
?>