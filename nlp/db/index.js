const mongoose = require("mongoose");
const config = require("../../config");
mongoose.connect(
	config.mongo,
	{ useNewUrlParser: true }
);

const answer = require("./answer");
const entity = require("./entity");
const intent = require("./intent");

module.exports = {
	answer,
	entity,
	intent
};
