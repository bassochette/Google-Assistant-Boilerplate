const db = require("../db");
const loader = require("../libs/loader");

const fn = async () => {
	const extension = ".json";
	let intents = await loader(`${__dirname}/../../intents`, extension);

	intents = intents.reduce((carry, item) => {
		let key = `${item.name}_${item.lang}`;
		if (!carry[key]) carry[key] = { trainings: [], ...item };
		carry[key].trainings.push(item.data);
		return carry;
	}, {});

	intents = Object.values(intents);
	console.log(intents);
	try {
		await db.intent.create(intents);
	} catch (error) {
		console.log("Error while importing nlp data: ", error);
		process.exit(1);
	}

	console.log(`
NLP data imported:
- ${intents.length} intents
    `);
};

fn();
