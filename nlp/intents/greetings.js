const { GREETINGS_HELLO, GREETINGS_BYE } = require("../intentsIndex");
module.exports = [
	{ lang: "fr", data: "yo", intent: GREETINGS_HELLO },
	{ lang: "fr", data: "yopyop", intent: GREETINGS_HELLO },
	{ lang: "fr", data: "hello", intent: GREETINGS_HELLO },
	{ lang: "fr", data: "salut", intent: GREETINGS_HELLO },
	{ lang: "fr", data: "yello", intent: GREETINGS_HELLO },
	{ lang: "fr", data: "plop", intent: GREETINGS_HELLO },
	{ lang: "fr", data: "bonjour", intent: GREETINGS_HELLO },
	{ lang: "fr", data: "wesh", intent: GREETINGS_HELLO },
	{ lang: "fr", data: "what's up", intent: GREETINGS_HELLO },
	{ lang: "fr", data: "au revoir", intent: GREETINGS_BYE },
	{ lang: "fr", data: "bye", intent: GREETINGS_BYE },
	{ lang: "fr", data: "ciao", intent: GREETINGS_BYE },
	{ lang: "fr", data: "cache toi", intent: GREETINGS_BYE },
	{ lang: "fr", data: "mon boss arrive!", intent: GREETINGS_BYE }
];
