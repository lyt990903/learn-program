<!DOCTYPE html>
<html lang="zh-CN">

<head>
  <meta charset="utf-8">
  <!-- 让ie  使用 edge 来渲染页面 -->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!-- 视口 可以根据需求 添加一些 选项 -->
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
  <title>Bootstrap 101 Template</title>

  <!-- Bootstrap -->
  <link href="lib/css/bootstrap.min.css" rel="stylesheet">

  <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!--  html5shiv  html5新语义标签 兼容性 -->
  <!--[if lt IE 9]>
        <script src="https://cdn.bootcss.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
  <style>
  img{
    width: 100px;
  }
  .row{
    display:flex;
    flex-wrap:wrap;
    text-align:center;
  }
  </style>
</head>

<body class='bg-success'>
  <div class="container">
    <div class="page-header">
      <h1>英雄联盟 <small>英雄列表</small></h1>
    </div>
  </div>
  <div class="container">
    <div class="panel panel-default">
      <div class="panel-body">
        <?php  @include 'heroArr.php';  ?>

          <div class="row">
            <?php for($i=0;$i<count($heroArr);$i++) {?>
              <div class="col-xs-4">
                <a href="./detail.php?index=<?php echo $i; ?>" class="thumbnail">
        <img src="<?php echo $heroArr[$i]['champion_icon'] ?>" alt="...">
        <?php echo $heroArr[$i]['champion_title'].'-'.$heroArr[$i]['champion_name'] ?>
        </a>
              </div>
              <?php } ?>
          </div>
      </div>
    </div>
  </div>

</body>

</html>
<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="lib/js/jquery-1.12.4.min.js"></script>
<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="lib/js/bootstrap.min.js"></script>