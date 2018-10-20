const entities = require ('./entities')
const intents = require('./intents')
const answers = require('./answers')

module.exports = async (manager) => {
    await intents(manager)
    await entities(manager)
    await answers(manager)
    console.time('training')
    console.log('Training started...')
    await manager.train()
    console.timeEnd('training')
    manager.save()
    console.log('Model saved.')
    return manager
}
