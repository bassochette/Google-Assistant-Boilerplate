const { readdir } = require("fs");

/**
 * TODO: can do better
 */
module.exports = async (path, extension = ".js") => {
	return new Promise((resolve, reject) => {
		readdir(path, (err, files) => {
			if (err) return reject(err);
			const sets = files.reduce((carry, file) => {
				if (["index.js", ".keep"].indexOf(file) !== -1) return carry;
				if (file.split(extension).length < 2) return carry;
				const set = require(`${path}/${file}`);
				console.log(`Loaded: ${path}/${file}`);
				return carry.concat(set);
			}, []);
			resolve(sets);
		});
	});
};
