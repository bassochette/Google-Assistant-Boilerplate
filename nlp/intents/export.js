/*
	BE VERY CAREFUL USING THIS SCRIPT
	local data in YOUR intents folder project will we replaced by the db

	use at your own risks...
*/
const db = require("../db");
const loader = require("../libs/loader");
const writeToFile = require("../libs/writeToFile");

const fn = async () => {
	const intents = await db.intent.find({});
	console.log(`Found ${intents.length} intents to export`);
	let intentMap = {};
	for (intent of intents) {
		const data = intent.trainings.map(training => {
			return {
				lang: intent.lang,
				name: intent.name,
				data: training
			};
		});
		if (!intentMap[intent.name]) intentMap[intent.name] = [];
		intentMap[intent.name] = intentMap[intent.name].concat(data);
	}

	const intentIndex = {}

	for (intent of Object.keys(intentMap)) {
		let filePath = `${__dirname}/../../intents/${intent}.json`
		await writeToFile(filePath, JSON.stringify(intentMap[intent]));
		intentIndex[itent] = filePath
	}

	await writeToFile(`${__dirname}/../../intents/index.js`, JSON.stringify(intentMap, undefined, 2))

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
