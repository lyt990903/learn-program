<?php
    $host = 'localhost';
    $user = 'root';
    $pwd = 'root';
    $dbname = 'phplearn';
    $db = new mysqli($host, $user, $pwd, $dbname);
    var_dump($db);
    //检查数据库连接是否成功
    if($db->connect_errno <> 0){
        echo '数据库连接失败：';
        echo $db->connect_error;
    }

    //设定数据库数据传输的编码，在query方法前设置
    $db->query("SET NAMES UTF8");

    $insertsql = 'INSERT INTO msg (content,user,intime) VALUES (213,123,321)';
    //检查插入SQL是否成功执行
    if($db->query($insertsql)){
        echo '插入成功';
    }
    else {
        echo '插入失败';
    }

    $sql = "SELECT * FROM msg ORDER BY id DESC";
    $mysqli_result = $db->query($sql);
    if($mysqli_result === false){
        echo "SQL错误";
        exit;
    }
    /*
    fetch_array()方法
    首次调用显示最新一条记录
    重复调用依次显示后面的记录
    如果没有记录可显示，则返回null
    MYSQL_ASSOC表示只需要关联数组
    */
    $rows = [];
    while ($row = $mysqli_result->fetch_array(MYSQLI_ASSOC)) {
        var_dump($row);

        $rows[$row['id']] = $row;
    }
    var_dump($rows);

?>