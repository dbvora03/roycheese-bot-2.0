const express = require('express')
const Discord = require('discord.js')
const app = express()

require('dotenv').config()

const PORT = process.env.PORT || 1738
const client = new Discord.Client()
const prefix = '%'

const fs = require('fs')
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./Commands/').filter(file => file.endsWith('.js'))

for (const file of commandFiles) {
    const command = require(`./Commands/${file}`)
    client.commands.set(command.name, command)
}

client.login(process.env.BOT_TOKEN)

client.on('message', message => {

    if(message.content.includes(`${process.env.SECRET_WORD}`)=== true) {
            message.channel.send('Go donate a dollar')

    }
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    let args = message.content.substring(prefix.length).split(" ")
    const command = args.shift().toLowerCase()
    if(command === 'help') client.commands.get('help').execute(message, args, Discord)
    else if(command === 'purge') client.commands.get('purge').execute(message, args)
    else if (command === 'play') client.commands.get('play').execute(message, args, client, Discord)
    else message.channel.send("That's not a command :neutral_face:. Use the command `%help` to see what i can do")
    

    console.log(args[0])


})


// Everything below is just for testing to make sure everything is online
client.once('ready', ()=> {
    console.log('Roycheese is online')
})

app.get('/', (req, res)=> {
    console.log('Container works')
    res.send("Hello this is a test")
})

app.listen(PORT, () => {
    console.log("Express works")
})

