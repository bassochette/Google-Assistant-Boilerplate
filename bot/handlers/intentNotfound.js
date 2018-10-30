const addUnkown = require('../../nlp/unkown/add')
module.exports = async understood => {
	if (understood.answer) return understood.answer;

	await addUnkown(understood.utterance, understood)

	return "Not understood...";
};
