const readline = require("readline");
const bot = require("./bot");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const main = async () => {
	rl.on("line", async message => {
		const response = await bot(message);
		console.log(response);
		process.stdout.write("> ");
	});
};

main()
	.then(() => {
		console.log("Bot started...");
		process.stdout.write("> ");
	})
	.catch(error => console.log("Error => ", error));
