const DisTube = require("distube")
const Discord = require('discord.js')

module.exports = {
    name: 'play',
    description: 'Music bot',
    async execute(client, message, args, Discord) {

        if(!message.member.voice.channel) {
            return message.channel.send('Join a voice channel or something :neutral_face:')
        }

        client.DisTube.play(message, args.join(" "))


        const newEmbed = new Discord.MessageEmbed()
        .setColor('#dd5d5d')
        .setTitle(`Now playing`)
        .setDescription(`${args.join(" ")}`)
        .setFooter('xoxo Roycheese bot')
    
        message.channel.send(newEmbed)
    }
    
}