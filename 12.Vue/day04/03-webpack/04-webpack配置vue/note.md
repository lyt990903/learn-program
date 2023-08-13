* vue有两个版本
`runtime-only` -> 代码中不能有template
`runtime-compiler` -> 代码中可以有template，因为有compiler可以用于编译template
可以配置resolve[alias]解决
```
resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  }
```