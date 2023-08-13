const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/lagou-admin", { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));

const userSchema = mongoose.Schema({
	username: String,
	password: String
});

const Users = mongoose.model("Users", userSchema);

const positionSchema = mongoose.Schema({
  companyLogo: String,
	companyName: String,
	positionName: String,
	city: String,
	createTime: String,
	salary: String
});

const Positions = mongoose.model('Positions', positionSchema);

exports.Users = Users;
exports.Positions = Positions;
