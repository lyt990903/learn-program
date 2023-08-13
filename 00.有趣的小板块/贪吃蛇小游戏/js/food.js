//width,height,color,x,y
//render（渲染）,random

var _div = null;
var _position = 'absolute';

function Food(options) {
    options = options || {};
    this.width = options.width || 20;
    this.height = options.height || 20;
    this.color = options.color || 'red';
    this.x = options.x || 0;
    this.y = options.y || 0;
}

Food.prototype.render = function (map) {
    var div = document.createElement("div");
    _div = div;
    div.style.position = _position;
    div.style.width = this.width + "px";
    div.style.height = this.height + "px";
    div.style.backgroundColor = this.color;
    map.appendChild(div);
};

Food.prototype.random = function () {
    this.x = parseInt(Math.random() * (map.offsetWidth / this.width)) * this.width;
    this.y = parseInt(Math.random() * (map.offsetHeight / this.height)) * this.height;
    _div.style.left = this.x + "px";
    _div.style.top = this.y + "px";
};

window.Food = Food;