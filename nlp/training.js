const { NlpManager } = require("node-nlp");

const entities = require("./entities");
const intents = require("./intents");
const answers = require("./answers");

const training = async () => {
	const manager = new NlpManager({ languages: ["en", "fr"] });
	await intents(manager);
	await entities(manager);
	await answers(manager);
	console.time("training");
	console.log("Training started...");
	await manager.train();
	console.timeEnd("training");
	await manager.save();
	console.log("Model saved.");
	return manager;
};

training()
	.then(
		() => {
			console.log('op success')
			process.exit(0)
		}
	)
	.catch(
		error => {
			console.log('error', error)
			process.exit(1)
		}
	)
