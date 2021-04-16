module.exports = {
    name: 'help',
    description: "this is the help command",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
                                    .setColor('#dd5d5d')
                                    .setTitle("Help command")
                                    .setDescription('Here are a list of commands I can do:')
                                    .addFields(
                                        {name: '`%purge <amount>`', value: 'Clears <amount> most recent messages'},
                                        {name: '`command2`', value: 'This commands does abc'}
                                    )
                                    .setImage('https://ofis.uwaterloo.ca/profile/sssaini.png')
                                    .setFooter('xoxo Roycheese bot')
        message.channel.send(newEmbed)
    }
}