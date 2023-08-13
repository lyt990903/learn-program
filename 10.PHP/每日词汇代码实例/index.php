<?php
include("top.html");
$Hit_Counter_Filename="count.txt";

function hit_count()
{
	global $Hit_Counter_Filename;
	$hit = 0;
	if(file_exists($Hit_Counter_Filename))
	{
		$hit=file_get_contents($Hit_Counter_Filename);
	}
	$hit++;
	file_put_contents($Hit_Counter_Filename,$hit);
	return $hit;
}

?>

<p>欢迎进入每日词汇页面！ 您每访问一次，
都会有一个随机的单词显示出来，该单词的含义会同时显示出来。</p>
<p><a href="word.php">查看今天的单词！</a></p>
<hr />
<p>该页面已经被访问<?= hit_count()?>次。</p>
</body>
</html>