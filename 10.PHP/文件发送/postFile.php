<?php
//$_FILES超全局变量，接收发送的文件
    print_r($_FILES);
    //     Array ( 
    //     [files] => Array ( 
    //         [name] => 404.png 
    //         [type] => image/png 
    //         [tmp_name] => D:\xampp\xampp\tmp\php831A.tmp 
    //         [error] => 0 
    //         [size] => 13865 
    //         ) 
    //     )
    move_uploaded_file($_FILES['files']['tmp_name'],'./files/'.$_FILES['files']['name']);
?>