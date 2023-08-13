/**
 * 变量和函数都会提升
 * 变量的声明提升在最前面，其次是函数
 * 隐式变量不会提升
 */

// 代码段1
console.log(a); // undefined
var a = 1;
/**
 * var a;
 * console.log(a);
 * a = 1;
 */

// 代码段2
function hd() {
	if (false) {
		// 即使是不执行也会提升
		var a = 1;
	}
	console.log(a);
}

hd(); // 1
/**
 * function hd() {
 *   var a;
 *   if(false) {
 *     a = 1;
 *   }
 *   console.log(a);
 * }
 */

// 代码段3
function foo() {
	console.log(a);
	var a = 1;
	console.log(a);
	function a() {}
	console.log(a);
	console.log(b);
	var b = 2;
	console.log(b);
	function b() {}
	console.log(b);
}

foo(); //
/**
 * function foo() {
 *   var a;
 *   var b;
 *   function a() {}
 *   function b() {}
 *   log(a);
 *   a = 1;
 *   log(a);
 *   log(a);
 *   log(b);
 *   b = 2;
 *   log(b);
 *   log(b);
 * }
 */

// 代码段4
function foo() {
  console.log(a); // undefined
  console.log(b); // 报错
  b = "aaa"; // 不提升
  var a = 1;
}