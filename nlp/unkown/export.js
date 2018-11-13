/*
	BE VERY CAREFUL USING THIS SCRIPT
	local data in YOUR unkown folder project will we replaced by the db

	use at your own risks...
*/
const db = require("../db");
const loader = require("../libs/loader");
const writeToFile = require("../libs/writeToFile");

const fn = async () => {
	const unkowns = await db.unkown.find({});
	console.log(`Found ${unkowns.length} unkown to export`);

	await writeToFile(`${__dirname}/../../unkowns/unkowns.json`, JSON.stringify(unkowns, undefined, 2))

};

fn()
	.then(
		() => {
			console.log('export succesfull')
			process.exit(0)
		}
	)
	.catch(
		error => {
			console.log('An error occured ', error)
			process.exit(2)
		}
	);
