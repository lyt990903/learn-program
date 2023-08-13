var map = document.querySelector(".map");
var arr = [];

for (var i = 0; i < 2; i++) {
    var r = Tool.getRandom(1, 255);
    var g = Tool.getRandom(1, 255);
    var b = Tool.getRandom(1, 255);
    var box = new Box({
        width: 20,
        height: 20,
        backgroundColor: 'rgb(' + r + ',' + g + ',' + b + ')',
    });
    box.render(map);
    arr.push(box);
}

random();
setInterval(random, 500);

function random() {
    arr.forEach(function (item) {
        item.random();
    });
}