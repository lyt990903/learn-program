<?php
    include("./connect.php");
    header('Content-Type:application/json;charset=utf-8');
    $getQuery = "SELECT * FROM rabbish";
    $getResult = $db->query($getQuery);
    // var_dump($getResult);
    $rows = [];
    while($row = $getResult->fetch_array(MYSQLI_ASSOC)){
        $rows[$row["id"]] = $row;
    }
    // var_dump($rows);
    $randomNum = random_int(1,4);
    $arr = array("sort"=>$rows[$randomNum]["sort"],"path"=>$rows[$randomNum]["path"]);
    // var_dump($arr);
    echo json_encode($arr);
?>