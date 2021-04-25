const express = require('express')
const Discord = require('discord.js')
const mongoose = require('mongoose')
const app = express()
const fs = require('fs')
const DisTube = require('distube')
require('dotenv').config()

const PORT = process.env.PORT || 1738
const client = new Discord.Client()
module.exports = client 
client.DisTube = new DisTube(client, {searchSongs: false, emitNewSongOnly: true})

mongoose.connect(
    process.env.MONGO_URI, 
    { useNewUrlParser: true,
    useUnifiedTopology: true
     }).then(()=> {
    console.log('MongoDB Connected')
  }).catch((err)=> {
    console.log(err)
  })


client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler=> {
    require(`./Handlers/${handler}`)(client, Discord)
})

client.login(process.env.BOT_TOKEN)

// Everything below is just for testing to make sure everything is online