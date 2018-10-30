const readline = require("readline");
const db = require("../db")

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});


const main = async () => {
  const unkowns = await db.unkown.find({})
  console.log(`found ${unkowns.length} sentence to classify`)
	rl.on("line", async message => {
		process.stdout.write("> ");
	});
};

main()
	.then(() => {
		console.log("Training sessions started...");
		process.stdout.write("> ");
	})
	.catch(error => console.log("Error => ", error));
