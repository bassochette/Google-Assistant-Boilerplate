const { config } = require("dotenv");
config();

module.exports = {
	discord: {
		key: process.env.DISCORD_KEY || ""
	}
};
