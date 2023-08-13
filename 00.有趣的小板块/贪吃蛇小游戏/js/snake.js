//width,height,direction,body(蛇头，蛇身)
//render,move

var _snakeElements = [];
var _position = 'absolute';

function Snake(options) {
    options = options || {};
    this.width = options.width || 20;
    this.height = options.height || 20;
    this.direction = options.direction || "right";
    this.body = [{
            x: 3,
            y: 2,
            color: "red"
        },
        {
            x: 2,
            y: 2,
            color: "orange"
        },
        {
            x: 1,
            y: 2,
            color: "orange"
        }
    ];
}

Snake.prototype.render = function (map) {

    for (var i = _snakeElements.length - 1; i >= 0; i--) {
        var ele = _snakeElements[i];
        ele.parentNode.removeChild(ele);
        _snakeElements.splice(i, 1);
    }

    for (i = 0; i < this.body.length; i++) {
        var obj = this.body[i];
        var div = document.createElement("div");
        div.style.position = _position;
        div.style.width = this.width + "px";
        div.style.height = this.height + "px";
        div.style.backgroundColor = obj.color;
        div.style.left = obj.x * this.width + "px";
        div.style.top = obj.y * this.height + "px";
        map.appendChild(div);
        _snakeElements.push(div);
    }
};

Snake.prototype.move = function () {
    var i = this.body.length - 1;
    for (; i > 0; i--) {
        this.body[i].x = this.body[i - 1].x;
        this.body[i].y = this.body[i - 1].y;
    }
    switch (this.direction) {
        case "right":
            this.body[0].x += 1;
            break;
        case "left":
            this.body[0].x -= 1;
            break;
        case "top":
            this.body[0].y -= 1;
            break;
        case "bottom":
            this.body[0].y += 1;
            break;
    }
};

window.Snake = Snake;