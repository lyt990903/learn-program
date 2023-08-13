<?php

    include_once('input.php');
    include('connect.php');

    $content = $_POST['content'];
    $user = $_POST['user'];

    $input = new Input();

    if($input->post($content) == -1){
        die('内容不能为空');
    }
    else if($input->post($content) == -2){
        die('内容中不能包含敏感词');
    }
    if($input->post($user) == -1){
        die('用户名不能为空');
    }
    else if($input->post($user) == -2){
        die('用户名中不能包含敏感词');
    }

    $time = time();
    $insertsql = "INSERT INTO msg (content,user,intime) VALUES ('{$content}','{$user}',$time)";
    if ($db->query($insertsql)) {
        echo '插入成功';
    } else {
        die('插入失败');
    }

    header("location: index.php");
?>