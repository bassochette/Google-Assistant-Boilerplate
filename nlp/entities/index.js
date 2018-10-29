const db = require("../db");

module.exports = async manager => {
	const entities = await db.entity.find({});
	for (entity of entities) {
		if (!entity) continue;
		manager.addNamedEntityText(entity.type, entity.name, entity.lang, entity.synonyms);
	}
	return manager;
};
