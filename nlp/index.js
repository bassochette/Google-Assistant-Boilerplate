const { NlpManager } = require("node-nlp");
const fs = require('fs')

const manager = new NlpManager({ languages: ["en", "fr"] });
const data = fs.readFileSync(__dirname+'/../model.nlp', 'utf8');
manager.import(data)
module.exports = async () => {
	return manager;
};
