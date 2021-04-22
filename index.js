const express = require('express')
const Discord = require('discord.js')
const app = express()

const covidcounter1 = require('./counters/covid-counter1')
const covidcounter2 = require('./counters/covid-counter2')

require('dotenv').config()

const PORT = process.env.PORT || 1738
const client = new Discord.Client()
const prefix = '%'

const fs = require('fs')
client.commands = new Discord.Collection();
client.events = new Discord.Collection();


client.login(process.env.BOT_TOKEN)

const commandFiles = fs.readdirSync('./Commands/').filter(file => file.endsWith('.js'))

for (const file of commandFiles) {
    const command = require(`./Commands/${file}`)
    client.commands.set(command.name, command)
}

client.on('message', message => {

    if(message.content.toLowerCase().includes(`${process.env.SECRET_WORD}`) === true || message.content.toLowerCase().includes(`${process.env.SECRET_WORD2}`)=== true) {
        message.channel.send('Thats the nono word, go pay a dollar ')
    }

    if(!message.content.startsWith(prefix) || message.author.bot) return;

    let args = message.content.substring(prefix.length).split(" ")
    const command = args.shift().toLowerCase()
    if(command === 'help') client.commands.get('help').execute(message, args, Discord)
    else if(command === 'purge') client.commands.get('purge').execute(message, args)
    else if (command === 'play') client.commands.get('play').execute(message, args, client, Discord)
    else if (command ==='command2') message.channel.send('hi')
    else if (command ==='8ball') client.commands.get('8ball').execute(message, args, Discord)
    else if (command ==='image') client.commands.get('image').execute(client, message, args)
    else if (command ==='spongebob') client.commands.get('spongebob').execute(client, message, args)
    else if (command ==='monkeymeme') client.commands.get('monkeymeme').execute(client, message, args)
    else if (command ==='monkey') client.commands.get('monkey').execute(client, message, args)


    else message.channel.send("That's not a command :neutral_face:. Use the command `%help` to see what i can do")


})

// Everything below is just for testing to make sure everything is online
client.once('ready', ()=> {
    covidcounter1(client)
    covidcounter2(client)

    console.log('Roycheese is online')
})