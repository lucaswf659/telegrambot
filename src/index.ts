// const Telegraf = require('telegraf')
// const axios = require('axios')
// const bot = new Telegraf('1350766014:AAHXa5KPBnJZLHqr14tJPm9wWcMEs6H8XiE')

// bot.use((ctx) =>{
//     ctx.reply('Hello!!')
// })

// bot.start((ctx) => {
//     ctx.reply(messages.welcome_message)
// })

// bot.command('fortune', (ctx) =>{
//     url = "http://yerkee.com/api/fortune"

//     axios.get(url)
//     .then((res)=>{
//         ctx.reply(res.data.fortune)
//     })
// })

//  bot.launch()

import { Telegraf } from 'telegraf'

const bot = new Telegraf('1350766014:AAHXa5KPBnJZLHqr14tJPm9wWcMEs6H8XiE')

bot.use((ctx) => {
    ctx.reply('Hello!!')
})

bot.launch()
