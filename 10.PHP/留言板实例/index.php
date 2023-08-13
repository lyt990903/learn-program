<?php
    include('connect.php');
    $sql = "SELECT * FROM msg ORDER BY id DESC";
    $mysqli_result = $db->query($sql);
    if ($mysqli_result === false) {
        echo "SQL错误";
        exit;
    }
    $rows = [];
    while ($row = $mysqli_result->fetch_array(MYSQLI_ASSOC)) {
        $rows[$row['id']] = $row;
    }
?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>留言板</title>
    <meta name="description" content="">
    <meta name="keywords" content="">
    <link rel="stylesheet" href="css/main.css">
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        .wrap {
            width: 600px;
            margin: 50px auto;
        }

        .add {
            overflow: hidden;
        }

        .add .content {
            width: 598px;
        }

        .add .user {
            float: left;
        }

        .add .btn {
            float: right;
        }

        .msg {
            margin: 20px 0px;
            background: #ccc;
        }

        .msg .info {
            overflow: hidden;
        }

        .msg .user {
            float: left;
            color: blue;
        }

        .msg .time {
            float: right;
            color: #999;
        }

        .msg .content {
            margin: 5px;
        }
    </style>
</head>

<body>
    <div class="wrap">
        <!-- 发表留言 -->
        <form action="save.php" method="POST">
            <div class="add">
                <textarea name="content" class="content" cols="50" rows="5"></textarea><br>
                <input name="user" class="user" type="text">
                <input class="btn" type="submit" value="发表留言">
            </div>
        </form>

        <!-- 查看留言 -->
        <?php
        foreach ($rows as $row) {
        ?>
            <div class="msg">
                <div class="info">
                    <span class="user"><?php echo $row['user']?></span>
                    <span class="time"><?php echo date("Y-m-d H:i:s",$row['intime'])?></span>
                </div>
                <div class="content">
                    <?php echo $row['content']?>
                </div>
            </div>
        <?php
        }
        ?>
    </div>
</body>

</html>