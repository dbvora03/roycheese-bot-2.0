const Discord = require('discord.js')
const axios = require('axios')


module.exports = {
    name: 'monkey',
    description: 'send monke',
    help:{name: '`%monkey`', value: 'Sends random monkey'},

    async execute (client, message, args, Discord) {

        const newEmbed = new Discord.MessageEmbed()
        .setColor('#dd5d5d')
        .setTitle("monke monke monke")
        .setImage(`https://www.placemonkeys.com/${Math.floor(Math.random() * 1000)}`)
        .setFooter('xoxo Roycheese bot')
    
        message.channel.send(newEmbed)
        

    }
}
