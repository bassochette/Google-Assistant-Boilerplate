const mongoose = require("mongoose");

const entitySchema = new mongoose.Schema({
	type: {
		type: mongoose.Schema.Types.String
	},
	name: {
		type: mongoose.Schema.Types.String
	},
	lang: {
		type: [mongoose.Schema.Types.String]
	},
	synonyms: {
		type: [mongoose.Schema.Types.String]
	}
});

module.exports = mongoose.model("Entity", entitySchema);
