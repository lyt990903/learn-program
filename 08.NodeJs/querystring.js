//引用模块
var queryString = require('querystring');
/*
.parse(str,sep,eq,options)      将字符串转化为对象
str：指要解析的URL查询字符串
sep(可省)：用于在查询字符串中分隔键值对的子字符串，默认值为&
eq(可省)：用于在查询字符串中分隔键和值的子字符串，默认值为=
options(可省)：该参数是一个对象，里面可设置maxKeys和decodeURIComponent两个属性
*/
var obj = queryString.parse('zhanglin:foolish,liuyutong:smart',',',':');
console.log(obj);

/*
.stringify(obj,sep,eq,options)      将对象序列化为字符串
obj：指要序列化为URL查询字符串的对象
sep(可省)：用于在查询字符串中分隔键值对的子字符串， 默认值为 &
eq(可省)：用于在查询字符串中分隔键和值的子字符串， 默认值为 =
options(可省)：传入一个对象， 里面可设置decodeURIComponent属性
*/
var string = queryString.stringify({name:'zhanglin',sex:['w','m'],character:'foolish'},';',';');
console.log(string);

/*
.escape(str)
str：以针对URL查询字符串的特定要求进行了优化的方式对给定执行URL百分比编码
*/
var str1 = 'name=xiaoming';
var result = queryString.escape(str1);
console.log(result);

/*
.unescape(str)
str：对给定的URL百分比编码字符进行解码
*/
var str2 = queryString.unescape(result);
console.log(str2);