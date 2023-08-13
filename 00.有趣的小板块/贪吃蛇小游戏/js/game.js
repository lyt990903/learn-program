//food,snake,map
//render,start,stop,ruler,bindKey

var that = null;
var timer = null;

function Game(map) {
    this.food = new Food();
    this.snake = new Snake();
    this.map = map;
    that = this;
}

Game.prototype.render = function () {
    this.food.render(this.map);
    this.food.random();
    this.snake.render(this.map);
    this.start(this.map);
    this.bindKey();

};

Game.prototype.start = function (map) {
    timer = setInterval(function () {
        this.snake.move();
        this.snake.render(map);
        this.ruler(this.food, this.snake, this.map);
        $("#scoreBoard p").text("当前得分：" + (this.snake.body.length - 3));
    }.bind(that), 150);
};

Game.prototype.stop = function () {
    clearInterval(timer);
};

Game.prototype.ruler = function (food, snake, map) {
    //判断蛇首和边界
    var headX = snake.body[0].x;
    var headY = snake.body[0].y;
    var maxX = map.offsetWidth / snake.width;
    var maxY = map.offsetHeight / snake.height;
    if (headX < 0 || headX >= maxX) {
        clearInterval(timer);
        alert("game over");
    }
    if (headY < 0 || headY >= maxY) {
        clearInterval(timer);
        alert("game over");
    }
    //判断蛇首和食物
    var headx = headX * snake.width;
    var heady = headY * snake.height;
    if (headx == food.x && heady == food.y) {
        food.random();
        var snakeLast = snake.body[snake.body.length - 1];
        snake.body.push({
            x: snakeLast.x,
            y: snakeLast.y,
            color: snakeLast.color,
        });
    }
    //判断蛇首和蛇身
    var bodyX = null;
    var bodyY = null;
    for (var i = 1; i < snake.body.length; i++) {
        bodyX = snake.body[i].x;
        bodyY = snake.body[i].y;
        if (bodyX == headX && bodyY == headY) {
            clearInterval(timer);
            alert("game over");
        }
    }
};

Game.prototype.bindKey = function () {
    addEventListener("keydown", function (e) {
        switch (e.keyCode) {
            case 37:
                this.snake.direction = "left";
                break;
            case 38:
                this.snake.direction = "top";
                break;
            case 39:
                this.snake.direction = "right";
                break;
            case 40:
                this.snake.direction = "bottom";
                break;
        }
    }.bind(that), false);
};

window.Game = Game;