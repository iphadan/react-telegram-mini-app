
const { Telegraf } = require('telegraf')
const BOT_TOKEN = "5658908983:AAEslZbdmd8FjTcke0xf28x6OGNPI9w9CeU"
const bot = new Telegraf(BOT_TOKEN)
const web_link ='https://tic-tac-toe-telegram-mini-game.netlify.app/';
bot.start((ctx) => ctx.reply('Welcome:)))',
    {
        reply_markup: {keyboard: [[{text: "web app",web_app:{url: web_link}}]]}
    }
))

bot.launch()