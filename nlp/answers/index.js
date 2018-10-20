const loader = require('../libs/loader')

module.exports = async (manager) => {
  const trainingSets = await loader(__dirname)

  for (training of trainingSets) {
      manager.addAnswer(training.lang, training.intent, training.answer)
  }

  return manager
}
