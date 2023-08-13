<?php

    class Input
    {
        private $arr = ['敏感词1', '敏感词2', '敏感词3'];

        //-1表示为空，-2表示存在敏感词，0表示正常
        public function post($con)
        {
            if ($con == '') {
                return -1;
            }
            //判断敏感词
            foreach ($this->arr as $word) {
                if (strpos($con, $word) !== false) {
                    return -2;
                }
            }
            return 0;
        }

    }
?>