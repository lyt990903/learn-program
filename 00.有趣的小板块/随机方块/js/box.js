// backgroundColor
// width
// height
// x
// y
//random,render

var _position = 'absolute';
var _map = null;

function Box(options) {
    options = options || {};
    this.backgroundColor = options.backgroundColor || "red";
    this.width = options.width || 20;
    this.height = options.height || 20;
    this.x = options.x || 0;
    this.y = options.y || 0;
    this._div = null;
}

//把box对象渲染到地图上
Box.prototype.render = function (map) {
    div = document.createElement("div");
    this._div = div;
    map.appendChild(div);
    this._map = map;
    div.style.backgroundColor = this.backgroundColor;
    div.style.width = this.width + 'px';
    div.style.height = this.height + 'px';
    div.style.left = this.x + 'px';
    div.style.top = this.y + 'px';
    div.style.position = _position;
};

//生成随机位置
Box.prototype.random = function () {
    if (!map) {
        return;
    }
    this.x = Tool.getRandom(0, map.offsetWidth / this.width - 1) * this.width;
    this.y = Tool.getRandom(0, map.offsetHeight / this.height - 1) * this.height;
    //alert(this.x+"\n"+this.y);
    this._div.style.left = this.x + 'px';
    this._div.style.top = this.y + 'px';
};