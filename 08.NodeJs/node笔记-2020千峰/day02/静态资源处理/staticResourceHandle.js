const fs = require("fs");
const path = require("path");
const mime = require("mime");

function readStaticFile(file) {
	return new Promise((resolve, reject) => {
		fs.readFile(file, (err, data) => {
			if (err) {
				resolve("请访问文件或保证文件夹下有index.html");
			}
			resolve(data);
		});
	});
}

async function staticResourceHandle(filePathName) {
	let data = "";
	let { ext } = path.parse(filePathName);
  let mimeType = mime.getType(ext) || "text/html";

	if (fs.existsSync(filePathName)) {
		if (ext) {
			data = await readStaticFile(filePathName);
		} else {
			data = await readStaticFile(path.join(filePathName, "/index.html"));
		}
	} else {
		data = "file is not found";
	}
	return { data, mimeType };
}

module.exports = staticResourceHandle;
