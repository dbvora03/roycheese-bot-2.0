const DisTube = require("distube")
const Discord = require('discord.js')

module.exports = {
    name: 'song',
    description: 'queue for music bot',
    help:{name: '`%song`', value: 'Gives song info'},

    async execute(client, message, args, Discord) {

        if(!message.member.voice.channel) {
            return message.channel.send('Join a voice channel or something :neutral_face:')
        }

        let queue = await client.DisTube.getQueue(message)

        let the_song = queue.songs[0]

        const newEmbed = new Discord.MessageEmbed()
        .setColor('#dd5d5d')
        .setTitle(`Now playing:`)
        .setTitle(`${the_song.name}`)
        .setURL(the_song.url)
        .setDescription(`**Queued by:** ${the_song.user.username}`)
        .addFields(
            {name: 'Duration', value: `${the_song.formattedDuration}`, inline: true},
            {name: 'Views', value: `${the_song.views}`, inline: true}
        )
        .setFooter('xoxo Roycheese bot')
    
        message.channel.send(newEmbed)
    }
}