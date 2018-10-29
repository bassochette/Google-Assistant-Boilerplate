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

	for (intent of Object.keys(intentMap)) {
		await writeToFile(`${__dirname}/../../intents/${intent}.json`, JSON.stringify(intentMap[intent]));
	}
};

fn();
