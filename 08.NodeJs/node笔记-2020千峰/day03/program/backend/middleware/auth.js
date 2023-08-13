const { verify } = require("../utils/tools");

const auth = (req, res, next) => {
  // cookie-session方案
  // if (req.session.username) {
	// 	next();
	// } else {
	// 	res.set("content-type", "application/json; charset=utf-8");

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
		next()
	} catch (e) {
		res.render("fail", {
			data: JSON.stringify({
				message: "用户未登录",
			}),
		});
	}
};

exports.auth = auth;