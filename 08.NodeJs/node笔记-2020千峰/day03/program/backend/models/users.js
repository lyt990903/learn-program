const { Users } = require("../utils/db");

exports.signup = ({ username, password }) => {
	const users = new Users({
		username,
		password
	});

	return users.save();
};

exports.findUser = username => {
	return Users.findOne({ username });
};

exports.findList = () => {
	return Users.find().sort({ _id: -1 });
};

exports.removeUser = id => {
	return Users.deleteOne({ _id: id });
};
