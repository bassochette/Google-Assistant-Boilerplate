const loader = require('../libs/loader')

module.exports = async (manager) => {
  const trainingSets = await loader(__dirname)


  for (training of trainingSets) {
    if (!training) continue
    manager.addDocument(training.lang, training.data, training.intent)
  }

  const userTrainingSets = await loader(`${__dirname}/../../intents`)

  for (training of userTrainingSets) {
      if (!training) continue
      try {
        manager.addDocument(training.lang, training.data, training.intent)
      } catch (error) {
          throw error
      }
  }

  return manager
}
