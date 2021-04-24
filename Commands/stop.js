const DisTube = require("distube")
const Discord = require('discord.js')

module.exports = {
    name: 'stop',
    description: 'stop track',
    async execute(message, args, client) {

        let queue = await client.DisTube.getQueue(message)
        let newEmbed;

        if(queue) {
            client.DisTube.stop(message)

            newEmbed = new Discord.MessageEmbed()
            .setColor('#dd5d5d')
            .setTitle(`Stopped queue`)
            .setFooter('xoxo Roycheese bot')
        } else {
            newEmbed = new Discord.MessageEmbed()
            .setColor('#dd5d5d')
            .setTitle(`There is no music playing`)
            .setFooter('xoxo Roycheese bot')
        }

        message.channel.send(newEmbed)
    }
}