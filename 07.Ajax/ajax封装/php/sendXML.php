<?php
    //设置返回的是xml
    header("Content-Type:application/xml;charset=utf-8");
    //读取
    echo file_get_contents("../data/data.xml");
?>