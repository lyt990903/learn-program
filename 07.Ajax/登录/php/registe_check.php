<?php
    header('Content-Type:application/json;charset=utf-8');
    include("./connect.php");
    //用户名检查
    if($_POST["which"] == "username"){
        $checkUsername = $_POST["checkUsername"];
        $checkQuery = "SELECT * FROM login WHERE username='{$checkUsername}'";
        //print_r($checkQuery);
        if($checkUsername == null){
            $arrCheck = array("message"=>"用户名不能为空","status"=>3);
            echo json_encode($arrCheck);
            exit;
        }
        $checkResult = $db->query($checkQuery);
        if($checkResult == null){
            $arrCheck = array("message"=>"用户名可以注册","status"=>1);
        }
        else{
            $arrCheck = array("message"=>"用户名重复","status"=>2);
        }
    }
    //密码检查
    if($_POST["which"] == "password"){
        $checkPwd = $_POST["checkPwd"];
        if($checkPwd == null){
            $arrCheck = array("message"=>"密码不能为空","status"=>2);
        }
        else{
            $arrCheck = array("message"=>"密码不为空","status"=>1);
        }
    }
    echo json_encode($arrCheck);
?>