const { intent } = require("../db");

module.exports = async manager => {
	const intents = await intent.find({});
	console.log(intents);
	for (training of intents) {
		for (t of training.trainings) {
			manager.addDocument(training.lang, t, training.name);
		}
	}

	return manager;
};
