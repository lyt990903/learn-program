const express = require("express");
const router = express.Router();

const { signup, list, remove, signin, signout, isAuth } = require("../controller/users");
const { auth } = require("../middleware/auth");

/* GET users listing. */
router.post("/", signup);
router.get("/", auth, list);
router.delete("/", auth, remove);
router.post("/signin", signin);
router.get("/signout", auth, signout);
router.get("/isAuth", isAuth); // 向前端暴露登录状态

module.exports = router;
