const db = require("../db");
const loader = require("../libs/loader");
const writeToFile = require("../libs/writeToFile");

const fn = async () => {
	const entities = await db.entity.find({});

	let entityMap = entities.reduce((carry, item) => {
		if (!carry[item.type]) carry[item.type] = [];
		carry[item.type].push(item);
		return carry;
	}, {});
	for (type of Object.keys(entityMap)) {
		await writeToFile(`${__dirname}/../../entities/${type}.json`, JSON.stringify(entityMap[type]));
	}
};

fn();
