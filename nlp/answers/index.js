const loader = require("../libs/loader");

module.exports = async manager => {
	const trainingSets = await loader(__dirname);
	const userAnswers = await loader(`${__dirname}/../../answers`);
	trainingSets.concat(userAnswers);
	for (training of trainingSets) {
		if (!training) continue;
		manager.addAnswer(training.lang, training.intent, training.answer);
	}

	return manager;
};
