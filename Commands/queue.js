

const DisTube = require("distube")
const Discord = require('discord.js')

module.exports = {
    name: 'queue',
    description: 'queue for music bot',
    async execute(message, args, client) {

        if(!message.member.voice.channel) {
            return message.channel.send('Join a voice channel or something :neutral_face:')
        }

        let queue = await client.DisTube.getQueue(message)
        console.log(queue.songs)

        /*
        message.channel.send('Current queue:\n' + queue.songs.map((song, id) =>
            `**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``
        ).slice(0, 10).join("\n"));
*/
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#dd5d5d')
        .setTitle(`Now playing`)
        .setDescription(`${args.join(" ")}`)
        .setFooter('xoxo Roycheese bot')
    
        message.channel.send(newEmbed)
    }
}