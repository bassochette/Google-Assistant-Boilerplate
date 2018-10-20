const loader = require('../libs/loader')

module.exports = async (manager) => {
  const trainingSets = await loader(__dirname)
  for (training of trainingSets) {
      manager.addDocument(training.lang, training.data, training.intent)
  }

  return manager
}
