const db = require("../db");
const loader = require("../libs/loader");
const writeToFile = require("../libs/writeToFile");

const fn = async () => {
	const answers = await db.answer.find({});

	console.log(`Found ${answers.length} answers to export`);
	let answerMap = {};
	for (answer of answers) {
		const data = answer.answers.map(synonym => {
			return {
				lang: answer.lang,
				intent: answer.intent,
				answer: synonym
			};
		});
		if (!answerMap[answer.intent]) answerMap[answer.intent] = [];
		answerMap[answer.intent] = answerMap[answer.intent].concat(data);
	}

	for (intent of Object.keys(answerMap)) {
		await writeToFile(`${__dirname}/../../answers/${intent}.json`, JSON.stringify(answerMap[intent]));
	}
};

fn();
