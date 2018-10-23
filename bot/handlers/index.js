const intents = require("../../nlp/intentsIndex");
const intentNotFound = require("./intentNotfound");

module.exports = async understood => {
	switch (understood.intent) {
		// ADD handlers here
		default:
			return intentNotFound(understood);
	}
};
