const WebSocket = require("ws");
const url = require("url");

const ws = new WebSocket.Server(
	{
		port: 9077
	},
	() => {
		console.log("websocket服务器开启-9077");
	}
);

let clients = [];
ws.on("connection", (ws, req) => {
	const { id } = url.parse(req.url, true).query;
	clients.push({
		id,
		ws
	});

	ws.on("message", objString => {
		const obj = JSON.parse(objString);
		console.log(obj.username + " ：" + obj.message);
		// if (obj1.message.indexOf("广播") != -1) {

		// } else {
		// 	ws.send(obj1);
		// }
		clients.forEach(client => {
			client.ws.send(JSON.stringify(obj));
		});
	});

	ws.on("close", () => {
		console.log("前端断开连接");
	});
});
