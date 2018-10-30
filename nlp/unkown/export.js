const db = require("../db");
const loader = require("../libs/loader");
const writeToFile = require("../libs/writeToFile");

const fn = async () => {
	const unkowns = await db.unkown.find({});
	console.log(`Found ${unkowns.length} unkown to export`);

	await writeToFile(`${__dirname}/../../unkowns/unkowns.json`, JSON.stringify(unkowns))

};

fn();
