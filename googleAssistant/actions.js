const bot = require('../bot');

const { actionssdk } = require('actions-on-google')
const app = actionssdk()

app.intent('actions.intent.MAIN', async (conv) => {
    const response = await bot("C'est bientot le weekend?")
    conv.ask(response)
})
  
app.intent('actions.intent.TEXT', async (conv, input) => {
    const response = await bot(input)
    conv.ask(response)
})

module.exports = app