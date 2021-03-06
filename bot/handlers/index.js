const intents = require("../../nlp/intentsIndex");
const intentNotFound = require("./intentNotfound");

module.exports = async understood => {
	if (understood.score < 0.9) {
		return intentNotFound(understood);
	}
	switch (understood.intent) {
		// ADD handlers here
		default:
			return intentNotFound(understood);
	}
};
