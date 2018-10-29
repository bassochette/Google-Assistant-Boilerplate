module.exports = async understood => {
	if (understood.answer) return understood.answer;

	// TODO: logic to store not understood sentences

	return "Not understood...";
};
