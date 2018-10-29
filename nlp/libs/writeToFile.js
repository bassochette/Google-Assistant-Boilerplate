const fs = require("fs");

const writeToFile = (path, json) =>
	new Promise((resolve, reject) => {
		fs.writeFile(path, json, "utf8", err => {
			if (err) return reject(err);
			return resolve();
		});
	});

module.exports = writeToFile;
