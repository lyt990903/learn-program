// 创建canvas对象
const backgroundContainer = document.querySelector(".particle-background");
const canvas = document.createElement("canvas");
canvas.id = "background-canvas";
backgroundContainer.appendChild(canvas);

const ctx = canvas.getContext("2d");
// let width = window.innerWidth;
// let height = window.innerHeight;
let width = backgroundContainer.clientWidth;
let height = backgroundContainer.clientHeight;

let dotNum = 80; // 点的数量
let radius = 1; // 圆的半径，连接线宽度的一半
let fillStyle = "rgba(255,255,255,0.5)"; // 点的颜色
let lineWidth = radius * 2; // 线宽
let connection = 120; // 连接的最大距离
let followLength = 80; // 鼠标跟随距离

let dots = [];
let animationFrame = null;
let mouseX = null;
let mouseY = null;

// 改变画布尺寸
function addCanvasSize() {
  // width = window.innerWidth;
	// height = window.innerHeight;
	width = backgroundContainer.clientWidth;
	height = backgroundContainer.clientHeight;
	canvas.width = width;
	canvas.height = height;
	ctx.clearRect(0, 0, width, height);
	dots = [];
	if (animationFrame) window.cancelAnimationFrame(animationFrame);
	initDots(dotNum);
	moveDots();
}

function mouseMove(e) {
	mouseX = e.clientX;
	mouseY = e.clientY;
}

function mouseOut(e) {
	mouseX = null;
	mouseY = null;
}

function mouseClick() {
	for (const dot of dots) dot.elastic();
}

class Dot {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.speedX = Math.random() * 2 - 1;
		this.speedY = Math.random() * 2 - 1;
		this.follow = false;
	}
	// 绘制
	draw() {
		ctx.beginPath();
		ctx.arc(this.x, this.y, radius, 0, 2 * Math.PI);
		ctx.fill();
		ctx.closePath();
	}
	// 移动
	move() {
		if (this.x >= width || this.x <= 0) this.speedX = -this.speedX;
		if (this.y >= height || this.y <= 0) this.speedY = -this.speedY;
		this.x += this.speedX;
		this.y += this.speedY;
		if (this.speedX >= 1) this.speedX--;
		if (this.speedX <= -1) this.speedX++;
		if (this.speedY >= 1) this.speedY--;
		if (this.speedY <= -1) this.speedY++;
		this.correct();
		this.connectMouse();
		this.draw();
	}
	// 根据鼠标的位置修正
	correct() {
		if (!mouseX || !mouseY) return;
		let lengthX = mouseX - this.x;
		let lengthY = mouseY - this.y;
		const distance = Math.sqrt(lengthX ** 2 + lengthY ** 2);
		if (distance <= followLength) {
			this.follow = true;
		} else if (this.follow === true && distance > followLength && distance <= followLength + 8) {
			let proportion = followLength / distance;
			lengthX *= proportion;
			lengthY *= proportion;
			this.x = mouseX - lengthX;
			this.y = mouseY - lengthY;
		} else {
			this.follow = false;
		}
	}
	// 点与鼠标连线
	connectMouse() {
		if (mouseX && mouseY) {
			let lengthX = mouseX - this.x;
			let lengthY = mouseY - this.y;
			const distance = Math.sqrt(lengthX ** 2 + lengthY ** 2);
			if (distance <= connection) {
				opacity = (1 - distance / connection) * 0.5;
				ctx.strokeStyle = `rgba(255,255,255,${opacity})`;
				ctx.beginPath();
				ctx.moveTo(this.x, this.y);
				ctx.lineTo(mouseX, mouseY);
				ctx.stroke();
				ctx.closePath();
			}
		}
	}
	// 鼠标点击后弹射
	elastic() {
		let lengthX = mouseX - this.x;
		let lengthY = mouseY - this.y;
		const distance = Math.sqrt(lengthX ** 2 + lengthY ** 2);
		if (distance >= connection) return;
		const rate = 1 - distance / connection; // 距离越小此值越接近1
		this.speedX = (40 * rate * -lengthX) / distance;
		this.speedY = (40 * rate * -lengthY) / distance;
	}
}

// 初始化粒子
function initDots(num) {
	ctx.fillStyle = fillStyle;
	ctx.lineWidth = lineWidth;
	for (let i = 0; i < num; i++) {
		const x = Math.floor(Math.random() * width);
		const y = Math.floor(Math.random() * height);
		const dot = new Dot(x, y);
		dot.draw();
		dots.push(dot);
	}
}

// 移动并建立点与点之间的连接线
function moveDots() {
	ctx.clearRect(0, 0, width, height);
	for (const dot of dots) {
		dot.move();
	}
	for (let i = 0; i < dots.length; i++) {
		for (let j = i; j < dots.length; j++) {
			const distance = Math.sqrt((dots[i].x - dots[j].x) ** 2 + (dots[i].y - dots[j].y) ** 2);
			if (distance <= connection) {
				opacity = (1 - distance / connection) * 0.5;
				ctx.strokeStyle = `rgba(255,255,255,${opacity})`;
				ctx.beginPath();
				ctx.moveTo(dots[i].x, dots[i].y);
				ctx.lineTo(dots[j].x, dots[j].y);
				ctx.stroke();
				ctx.closePath();
			}
		}
	}
	animationFrame = window.requestAnimationFrame(moveDots);
}

addCanvasSize();

initDots(dotNum);
moveDots();

document.onmousemove = mouseMove;
document.onmouseout = mouseOut;
document.onclick = mouseClick;
window.onresize = addCanvasSize;
