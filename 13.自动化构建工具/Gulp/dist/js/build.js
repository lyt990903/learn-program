(function () {
    function foo(num1, num2) {
        return num1 + num2;
    }
    console.log(foo(30, 30));
})();
(function () {
    var arr = [1, 2, 3, 4].map(function (item, index) {
        return item + 10;
    })
    console.log(arr);
})();