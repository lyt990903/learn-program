const bcrypt = require("bcrypt");
const fs = require("fs");
const path = require("path");
const jwt = require("jsonwebtoken");

exports.hash = password => {
	const saltRounds = 10;
	return new Promise((resolve, reject) => {
		bcrypt.hash(password, saltRounds, function (err, hash) {
			// Store hash in your password DB.
			if (err) {
				reject(err);
			} else {
				resolve(hash);
			}
		});
	});
};

exports.compare = (myPlaintextPassword, hash) => {
	return new Promise((resolve, reject) => {
		bcrypt.compare(myPlaintextPassword, hash, function (err, result) {
			if (err) {
				reject(err);
			} else {
				resolve(result);
			}
		});
	});
};

exports.sign = username => {
	const privateKey = fs.readFileSync(path.join(__dirname, "../keys/rsa_private_key.pem"));
	const token = jwt.sign({ username }, privateKey, { algorithm: "RS256" });
	return token;
};

exports.verify = token => {
	const publicKey = fs.readFileSync(path.join(__dirname, "../keys/rsa_public_key.pem"));
	const result = jwt.verify(token, publicKey);
	return result;
};
