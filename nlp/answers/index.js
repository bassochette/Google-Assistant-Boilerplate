const { answer } = require("../db");

module.exports = async manager => {
	// db answers
	const answers = await answer.find({});
	for (training of answers) {
		for (a of training.answers) {
			manager.addAnswer(training.lang, training.intent, a);
		}
	}

	return manager;
};
