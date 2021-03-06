const DisTube = require("distube")
const Discord = require('discord.js')

module.exports = {
    name: 'queue',
    description: 'queue for music bot',
    help:{name: '`%queue`', value: 'Reveals queue'},

    async execute(client, message, args, Discord) {

        if(!message.member.voice.channel) {
            return message.channel.send('Join a voice channel or something :neutral_face:')
        }

        let queue = await client.DisTube.getQueue(message)

        let queue_array = []

        for(const song  of queue.songs) {

            queue_array.push(`**${song.name}**, Duration:${song.formattedDuration} `)
        }

        const newEmbed = new Discord.MessageEmbed()
        .setColor('#dd5d5d')
        .setTitle(`Now playing`)
        .setDescription(queue_array)
        .setFooter('xoxo Roycheese bot')
    
        message.channel.send(newEmbed)
    }
}