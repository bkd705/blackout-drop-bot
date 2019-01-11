const dotenv = require('dotenv')
const Discord = require('discord.io')

dotenv.config()

class Bot {
  constructor(token) {
    this.bot = new Discord.Client({
      token: token,
      autorun: true
    })
    this.commands = {}

    this.startBot()
    this.startCommandListener()
  }

  startBot() {
    this.bot.on('ready', () => {
      console.log(`Logged in as ${this.bot.username} - ${this.bot.id}`)
    })
  }

  startCommandListener() {
    this.bot.on('message', (user, userId, channelId, message, event) => {
      if (message.charAt(0) !== '!') return

      const command = message.split(' ')[0]
      if (!this.commands[command]) return

      this.commands[command](this.bot, {
        userId,
        user,
        channelId,
        message,
        event
      })
    })
  }

  command(name, callback) {
    this.commands[name] = callback
  }
}

module.exports = Bot
