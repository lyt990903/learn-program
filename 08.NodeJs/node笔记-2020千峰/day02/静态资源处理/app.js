const http = require("http");
const path = require("path");
const staticResourceHandle = require("./staticResourceHandle");

http
	.createServer(async (req, res) => {
		let urlString = req.url;
		if (req.url != "/favicon.ico") {
			let fileName = path.join(__dirname, "/public", urlString);
			let { data, mimeType } = await staticResourceHandle(fileName);
			res.writeHead(200, {
				"content-type": mimeType,
			});
			res.write(data);
		}
		res.end();
	})
	.listen(9898, () => {
		console.log("server started");
	});
