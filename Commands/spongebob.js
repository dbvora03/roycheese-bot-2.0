const Discord = require('discord.js')
const axios = require('axios')


module.exports = {
    name: 'spongebob',
    description: 'mocking spongebob meme',
    async execute (client, message, args, Discord) {

        const newEmbed = new Discord.MessageEmbed()
        .setColor('#dd5d5d')
        .setTitle("Your meme")
        .setImage(`http://apimeme.com/meme?meme=Mocking-Spongebob&top=${args.join('+')}&bottom=`)
        .setFooter('xoxo Roycheese bot')
    
        message.channel.send(newEmbed)
        

    }
}
