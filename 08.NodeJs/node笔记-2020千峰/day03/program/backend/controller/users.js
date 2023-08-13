const usersModel = require("../models/users"); // 别名
const { hash, compare, sign, verify } = require("../utils/tools");
// const randomstring = require("randomstring");

signup = async (req, res, next) => {
	res.set("content-type", "application/json; charset=utf-8");
	const { username, password } = req.body;

	// 查询重名
	let isRepetition = await usersModel.findUser(username);

	if (isRepetition) {
		res.render("fail", {
			data: JSON.stringify({
				message: "用户名已存在"
			})
		});
	} else {
		// 密码加密
		const bcryptPassword = await hash(password);
		// 入数据库
		await usersModel.signup({
			username,
			password: bcryptPassword
		});

		// 返回前端
		res.render("succ", {
			data: JSON.stringify({
				// username,
				// password,
				message: "注册成功"
			})
		});
	}
};

list = async (req, res, next) => {
	res.set("content-type", "application/json; charset=utf-8");

	const userList = await usersModel.findList();
	res.render("succ", {
		data: JSON.stringify({
			userList
		})
	});
};

remove = async (req, res, next) => {
	res.set("content-type", "application/json; charset=utf-8");
	const { id } = req.body;

	const result = await usersModel.removeUser(id);
	if (result.deletedCount) {
		res.render("succ", {
			data: JSON.stringify({
				message: "删除用户成功"
			})
		});
	} else {
		res.render("fail", {
			data: JSON.stringify({
				message: "删除用户失败"
			})
		});
	}
};

signin = async (req, res, next) => {
	res.set("content-type", "application/json; charset=utf-8");
	const { username, password } = req.body;
	let result = await usersModel.findUser(username);

	if (result) {
		// 验证密码
		let { password: hash } = result;
		let compareResult = await compare(password, hash);
		if (compareResult) {
			// 生成session + 发送cookie
			// let sessionId = randomstring.generate();
			// res.append("Set-Cookie", `sessionId=${sessionId}; Path=/; HttpOnly`);
			// req.session.username = username; // 推荐

			// token方案
			const token = sign(username);
			res.set("X-Access-token", token);

			res.render("succ", {
				data: JSON.stringify({
					username
				})
			});
		} else {
			res.render("fail", {
				data: JSON.stringify({
					message: "密码错误"
				})
			});
		}
	} else {
		res.render("fail", {
			data: JSON.stringify({
				message: "用户不存在"
			})
		});
	}
};

signout = async (req, res, next) => {
	// cookie-session方案
	// req.session.username = null;

	// token方案不做处理
	res.render("succ", {
		data: JSON.stringify({
			message: "退出登录"
		})
	});
};

isAuth = async (req, res, next) => {
	res.set("content-type", "application/json; charset=utf-8");
	// cookie-session方案
	// if (req.session.username) {
	// 	res.render("succ", {
	// 		data: JSON.stringify({
	//       message: "用户已登录",
	// 			username: req.session.username,
	// 		}),
	// 	});
	// } else {
	// 	res.render("fail", {
	// 		data: JSON.stringify({
	// 			message: "用户未登录",
	// 		}),
	// 	});
	// }

	// token方案
	const token = req.get("X-Access-Token");
	try {
		let result = verify(token);
		res.render("succ", {
			data: JSON.stringify({
				message: "用户已登录",
				username: result.username
			})
		});
	} catch (e) {
		res.render("fail", {
			data: JSON.stringify({
				message: "用户未登录"
			})
		});
	}
};

exports.signup = signup;
exports.list = list;
exports.remove = remove;
exports.signin = signin;
exports.signout = signout;
exports.isAuth = isAuth;
