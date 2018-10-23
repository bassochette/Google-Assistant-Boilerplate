const nlp = require("../nlp")
const handlers = require('./handlers')
nlp.startBrain()

module.exports = async (message) => {
    const nlpManager = await nlp();

    const understood = await nlpManager.process('fr', message)

    const response =  handlers(understood)
    return response
}
