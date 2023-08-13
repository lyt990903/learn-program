<?php
    class Name{
        //变量前必须有访问修饰，函数前可没有
        private $s1 = 1;
        private $s2 = 2;

        //魔术方法--构造函数，构造后不用调用自动执行(以两个下划线开头，名字是固定的，有多种魔术方法)
            // public function __construct(){
            //     echo '123';
            // }
        public function __construct($s1, $s2){
            //$this后的s1不需要再加$
            $this->s1 = $s1;
            $this->s2 = $s2;
        }

        function s1(){
            echo $this->s1;
        }
        public function s2(){
            echo $this->s2;
        }
    }

    $name = new name(2, 1);
    $name->s1();
?>