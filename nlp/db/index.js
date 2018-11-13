const mongoose = require("mongoose");
const config = require("../../config");
console.log('connecting to mongo > ', config.mongo)
mongoose.connect(
	config.mongo,
	{ useNewUrlParser: true }
);

const answer = require("./answer");
const entity = require("./entity");
const intent = require("./intent");
const unkown = require("./unkown");

module.exports = {
	answer,
	entity,
	intent,
	unkown
};
