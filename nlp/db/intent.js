const mongoose = require("mongoose");

const intentSchema = new mongoose.Schema({
	name: {
		type: mongoose.Schema.Types.String
	},
	lang: {
		type: mongoose.Schema.Types.String
	},
	trainings: {
		type: [mongoose.Schema.Types.String]
	}
});

module.exports = mongoose.model("Intent", intentSchema);
