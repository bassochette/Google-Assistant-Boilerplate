const db = require("../db");
const loader = require("../libs/loader");

const fn = async () => {
	const extension = ".json";
	let answers = await loader(`${__dirname}/../../answers`, extension);

	answers = answers.reduce((carry, item) => {
		let key = `${item.intent}_${item.lang}`;
		if (!carry[key]) carry[key] = { answers: [], ...item };
		carry[key].answers.push(item.answer);
		return carry;
	}, {});

	answers = Object.values(answers);
	try {
		await db.answer.create(answers);
	} catch (error) {
		console.log("Error while importing nlp data: ", error);
		process.exit(1);
	}

	console.log(`
NLP data imported:
- ${answers.length} answers
    `);
};

fn();
