import SMERouter from "sme-router";

const router = new SMERouter("root");

// route config
router.route("/index", (req, res, next) => {
	res.render(`hallo world`);
});

router.route("*", (req, res, next) => {
	res.redirect("/index");
});
