/*
// Object.defineProperty(obj, prop, description)
function defineProperty() {
	var _obj = {};

	// 定义单个属性
	// Object.defineProperty(_obj, 'a', {
	// 	value: 1
	// });
	// 定义多个属性
	Object.defineProperties(_obj, {
		a: {
			value: 1
		},
		b: {
			value: 1,
			writable: true, // 可写
			enumerable: true, // 可枚举
			configurable: true // 可删除
		}
	});

	return _obj;
}

var obj = defineProperty();

// 不可修改
obj.a = 5;
obj.b = 5;
console.log(obj);

// 不可枚举
for (let item in obj) {
	console.log(item);
}

// 不可删除
delete obj.a;
delete obj.b;
console.log(obj);
*/

/*
function defineProperty() {
	var _obj = {};
	var a = 1;

	Object.defineProperties(_obj, {
		a: {
      // value、writable出现任意一个，getter和setter不能出现
			get() {
				return `a的值为${a}`;
			},
			set(newVal) {
				console.log(`a的值被改变为${newVal}`);
				a = newVal;
				oP = document.querySelector("p");
				oP.innerHTML = a;
			}
		}
	});

	return _obj;
}

var obj = defineProperty();

console.log(obj.a);
obj.a = 4;

// 数据劫持：指利用getter和setter改变默认操作
*/

function DataArr() {
	var _val = null,
		_arr = [];

	Object.defineProperty(this, "val", {
		get: function () {
			return _val;
		},
		set: function (newVal) {
			console.log("the new value is " + newVal + ".");
			_val = newVal;
			_arr.push({ val: _val });
		}
	});

	this.getArr = function () {
		return _arr;
	};
}

var dataArr = new DataArr();
dataArr.val = 123;
dataArr.val = 456;
console.log(dataArr.getArr());
