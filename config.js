const { config } = require("dotenv");
config();

module.exports = {
	discord: {
		key: process.env.DISCORD_KEY || ""
	},
	mongo: process.env.MONGO_URL || "mongodb://localhost:27017/boilerplate_bot"
};
