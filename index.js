const dotenv = require('dotenv')
const Bot = require('./Bot')
const generateRandomCoord = require('./utils/generateRandomCoord')
const getRandomHotdrop = require('./utils/getRandomHotdrop')
const axios = require('axios')

dotenv.config()

const bot = new Bot(process.env.DISCORD_TOKEN)

bot.command('!randomCoord', (discord, { channelId }) => {
  const [x, y] = generateRandomCoord()
  discord.sendMessage({
    to: channelId,
    message: `${x.toUpperCase()}${y}`
  })
})

bot.command('!hotdrop', (discord, { channelId }) => {
  const drop = getRandomHotdrop()
  discord.sendMessage({
    to: channelId,
    message: drop
  })
})

bot.command('!kd', async (discord, { channelId, message }) => {
  const [_command, ...args] = message.split(' ')
  const [user] = args

  const {
    data: { data }
  } = await axios.get(
    `https://my.callofduty.com/api/papi-client/crm/cod/v2/title/bo4/platform/battle/gamer/${encodeURIComponent(
      user
    )}/profile?type=blackout`
  )

  const { mp } = data
  const { kills, deaths } = mp.lifetime.all
  const KD = (parseInt(kills, 10) / parseInt(deaths, 10)).toFixed(2)

  discord.sendMessage({
    to: channelId,
    message: `Kills: ${kills}\nDeaths: ${deaths}\nKD: ${KD}`
  })
})
