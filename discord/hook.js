const Discord = require('discord.js')
const bot = require('../bot')
const config = require('../config')

const client = new Discord.Client()

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async (msg) => {
    if (msg.author.bot) return
    console.log(msg)
    const response = await bot(msg.content)
    msg.reply(response)
});

client.login(config.discord.key)
