const DisTube = require("distube")
const Discord = require('discord.js')

module.exports = {
    name: 'skip',
    description: 'skip',
    async execute(client, message, args, Discord) {

        if(!message.member.voice.channel) {
            return message.channel.send('Join a voice channel or something :neutral_face:')
        }

        let queue = await client.DisTube.getQueue(message)
        let newEmbed;

        if(queue) {
            client.DisTube.skip(message)

            newEmbed = new Discord.MessageEmbed()
            .setColor('#dd5d5d')
            .setTitle(`Skipped song`)
            .setFooter('xoxo Roycheese bot')
        } else {
            newEmbed = new Discord.MessageEmbed()
            .setColor('#dd5d5d')
            .setTitle(`There is no song to skip `)
            .setFooter('xoxo Roycheese bot')
        }

        message.channel.send(newEmbed)
    }
}