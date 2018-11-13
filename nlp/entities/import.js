const db = require("../db");
const loader = require("../libs/loader");

const fn = async () => {
	const extension = ".json";
	let entities = await loader(`${__dirname}/../../entities`, extension);

	try {
		await db.entity.create(entities);
	} catch (error) {
		console.log("Error while loading entities", error);
		throw error;
	}
};

module.exports = fn
