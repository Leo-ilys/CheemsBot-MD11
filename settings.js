//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: 
//Instagram: ik_3
//Telegram: t.me/gggne
//GitHub: @Leo-ilys
//WhatsApp: +212638862771
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs')
const chalk = require('chalk')

//session
global.sessionid ='ur session id'

//owmner v card
global.ytname = "YT: Leo" //ur yt chanel name
global.socialm = "GitHub: Leo-ilys" //ur github or insta name
global.location = "Morocco" //ur location

//new
global.botname = 'LeoBot' //ur bot name
global.ownernumber = '212638862771' //ur owner number
global.ownername = 'Elias Leo' //ur owner name
global.websitex = "https://youtu.be/"
global.wagc = "https://whatsapp.com/channel/"
global.themeemoji = '🪀'
global.wm = "Leo Bot Inc."
global.botscript = 'https://github.com/Leo-Ilys/CheemsBot-MD11' //script link
global.packname = "Sticker By"
global.author = "Elias Leo\n\n+212638862771"
global.creator = "212638862771@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["212638862771"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = false //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
