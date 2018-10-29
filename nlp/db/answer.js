const mongoose = require("mongoose");

const answerSchema = new mongoose.Schema({
	intent: {
		type: mongoose.Schema.Types.String
	},
	lang: {
		type: mongoose.Schema.Types.String
	},
	answers: {
		type: [mongoose.Schema.Types.String]
	}
});

module.exports = mongoose.model("Answer", answerSchema);
