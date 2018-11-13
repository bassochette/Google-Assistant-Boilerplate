const nlp = require("../nlp");
const handlers = require("./handlers");

module.exports = async message => {
	const nlpManager = await nlp();

	const understood = await nlpManager.process("fr", message);

	const response = handlers(understood);
	return response;
};
