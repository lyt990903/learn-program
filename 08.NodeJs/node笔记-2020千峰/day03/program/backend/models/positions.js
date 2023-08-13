const { Positions } = require("../utils/db");

exports.add = data => {
	const posiiton = new Positions(data);

	return posiiton.save();
};

exports.findList = () => {
	return Positions.find().sort({ _id: -1 });
};

exports.remove = id => {
	return Positions.deleteOne({ _id: id });
};

exports.update = data => {
	return Positions.findByIdAndUpdate(data.id, data);
};

exports.findone = id => {
	return Positions.findOne({ _id: id });
};
