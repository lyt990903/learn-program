* 在开发中，配置文件中的配置可以分为运行时需要和打包时需要，可以将这些配置分为多个文件

* base：公共的
  prod：生产时需要
  dev：开发时需要

* 需要webpack-merge
* 执行时加上`--config [指定文件路径]`
* 该方式打包到build/dist文件夹中，所以要修改output属性中的path