const {NlpManager} = require('node-nlp')
const manager = new NlpManager({languages: ['en', 'fr']})

const training = require('./training')
let brain;

module.exports = async () => {
    if (!brain) {
        brain = await training(manager)
    }
    return brain
}


module.exports.startBrain = async () => {
    brain = await training(manager)
}