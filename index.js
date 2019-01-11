const dotenv = require('dotenv')
const Discord = require('discord.io')
const generateRandomCoord = require('./utils/generateRandomCoord')
const getRandomHotdrop = require('./utils/getRandomHotdrop')

dotenv.config()

const bot = new Discord.Client({
    token: process.env.DISCORD_TOKEN,
    autorun: true
})

bot.on('ready', () => {
    console.log(`Logged in as ${bot.username} - ${bot.id}`)
})

bot.on('message', (user, userId, channelId, message, event) => {
    switch(message) {
        case '!randomCoord': {
            const [x, y] = generateRandomCoord()
            bot.sendMessage({
                to: channelId,
                message: `${x.toUpperCase()} ${y}`
            })
        }
        case '!hotdrop': {
            const drop = getRandomHotdrop()
            bot.sendMessage({
                to: channelId,
                message: drop
            })
        }
    }
})