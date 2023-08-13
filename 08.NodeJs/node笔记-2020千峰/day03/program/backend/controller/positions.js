const positionsModel = require("../models/positions");
const moment = require("moment");

add = async (req, res, next) => {
	res.set("content-type", "application/json; charset=utf-8");
	const info = req.body;
	const result = await positionsModel.add({
		...info,
		companyLogo: req.companyLogo,
		createTime: moment().format("YYYY-MM-DD, HH:mm")
	});
	if (result) {
		res.render("succ", {
			data: JSON.stringify({
				message: "职位添加成功"
			})
		});
	} else {
		res.render("fail", {
			data: JSON.stringify({
				message: "职位添加不成功"
			})
		});
	}
};

list = async (req, res, next) => {
	const result = await positionsModel.findList();
	if (result) {
		res.json(result);
	} else {
		res.render("fail", {
			data: JSON.stringify({
				message: "获取职位列表失败"
			})
		});
	}
};

remove = async (req, res, next) => {
	res.set("content-type", "application/json;charset=utf-8");
	const { id } = req.body;
	const result = await positionsModel.remove(id);
	if (result) {
		if (result.deletedCount > 0) {
			res.render("succ", {
				data: JSON.stringify({
					message: "职位删除成功"
				})
			});
		} else {
			res.render("fail", {
				data: JSON.stringify({
					message: "无该职位"
				})
			});
		}
	} else {
		res.render("fail", {
			data: JSON.stringify({
				message: "职位删除失败"
			})
		});
	}
};

update = async (req, res, next) => {
	res.set("content-type", "application/json;charset=utf-8");
	let data = { ...req.body };
	if (req.companyLogo) {
		data["companyLogo"] = req.companyLogo;
	}
	const result = await positionsModel.update(data);
	// console.log(result);
	if (result) {
		res.render("succ", {
			data: JSON.stringify({
				message: "职位修改成功"
			})
		});
	} else {
		res.render("fail", {
			data: JSON.stringify({
				message: "职位修改失败"
			})
		});
	}
};

findone = async (req, res, next) => {
	res.set("content-type", "application/json;charset=utf-8");
	const result = await positionsModel.findone(req.body.id);
	if (result) {
		res.render("succ", {
			data: JSON.stringify({
				...result._doc
			})
		});
	} else {
		res.render("fail", {
			data: JSON.stringify({
				message: "职位查找失败"
			})
		});
	}
};

exports.add = add;
exports.list = list;
exports.remove = remove;
exports.update = update;
exports.findone = findone;
