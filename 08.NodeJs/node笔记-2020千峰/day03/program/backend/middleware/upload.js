const path = require("path");
const fs = require("fs");
const multer = require("multer");
const mime = require("mime");
const { json } = require("express");

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, path.join(__dirname, "../public/upload"));
	},
	filename: function (req, file, cb) {
		const ext = mime.getExtension(file.mimetype);
		let fileName = file.fieldname + "-" + Date.now() + "." + ext;
		cb(null, fileName);
	}
});

const limits = {
	fileSize: 200000,
	files: 1
};

function fileFilter(req, file, cb) {
	// 这个函数应该调用 `cb` 用boolean值来
	// 指示是否应接受该文件
	const acceptType = ["image/png", "image/jpg", "image/jpeg", "image/gif"];

	if (!acceptType.includes(file.mimetype)) {
		// 如果有问题，你可以总是这样发送一个错误:
		cb(new Error("文件必须为.png, .jpg, .jpeg, .gif"));
	} else {
		// 接受这个文件，使用`true`，像这样:
		cb(null, true);
	}
}

const upload = multer({
	storage,
	limits,
	fileFilter
}).single("companyLogo");

exports.uploadMiddleware = (req, res, next) => {
	res.set("content-type", "application/json; charset=utf-8");
	upload(req, res, function (err) {
		if (err instanceof multer.MulterError) {
			// 发生错误
			res.render("fail", {
				data: JSON.stringify({
					message: "文件不能超过200k"
				})
			});
		} else if (err) {
			// 发生错误
			res.render("fail", {
				data: JSON.stringify({
					message: err.message
				})
			});
		} else {
			const { companyLogo_old } = req.body;
			// 一切都好
			if (req.file && companyLogo_old) {
				try {
					fs.unlinkSync(path.join(__dirname, `../public/upload/${companyLogo_old}`));
					req.companyLogo = req.file.fileName;
				} catch (err) {
					console.log(err);
				}
			} else if (!req.file && companyLogo_old) {
				req.companyLogo = companyLogo_old;
			} else {
				req.companyLogo = req.file.fileName;
			}
			next();
		}
	});
};
