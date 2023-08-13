<?php
include("top.html");
$Word_filename="words.txt";

function read_word(){
	global $Word_filename;
	$lines= file($Word_filename);
	$random_index= rand(0,count($lines)-1);
	$random_line=$lines[$random_index];
	$word_all =explode("\t",$random_line);
	list($word, $cx, $definition)=$word_all;
?>

<p><?= $word ?> - 
<?=$cx ?> 。 <br />
<?=$definition ?>
</p>
<?php
}
?>
<div>
<?php
for($row=1; $row<=2; $row++)
{
	
	for($col=1; $col<=6; $col++)
	{
		?>
        <img src="vocab.jpg" alt="" />
        <?php
	}
	?>
    <br />
    <?php
	}
	?>
</div>
<p>您今天所看单词是：</p>
<?php
read_word();
?>
</body>
</html>