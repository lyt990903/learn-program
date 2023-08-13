<?php
    //设置返回的是JSON
    header("Content-Type:application/json;charset=utf-8");
    //读取
    echo file_get_contents("../data/data.json");
?>