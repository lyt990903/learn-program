const express = require("express");
const router = express.Router();
const { add, list, remove, update, findone } = require("../controller/positions");
const { uploadMiddleware } = require("../middleware/upload");

router.post("/add", uploadMiddleware, add);
router.get("/list", list);
router.delete("/remove", remove);
router.post("/update",uploadMiddleware, update);
router.post("/findone", findone)

module.exports = router;
