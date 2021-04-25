const Discord = require("discord.js")
const fs = require('fs')

module.exports = {
    name: 'help',
    description: "this is the help command",
    help: {name: '`%help`', value: ':neutral_face:'},

    execute(client, message, args, Discord) {

        let help_array = []

        const command_files = fs.readdirSync('./Commands/').filter(file => file.endsWith('.js'))

        for(const file  of command_files) {
            const command = require(`../Commands/${file}`)
            if(command.name) {
                help_array.push(command.help)
            } else {
                continue;
            }
        }

        const newEmbed = new Discord.MessageEmbed()
                                    .setColor('#dd5d5d')
                                    .setTitle("Here are a list of commands I can do:")
                                    .addFields(help_array)
                                    .setImage('https://ofis.uwaterloo.ca/profile/sssaini.png')
                                    .setFooter('xoxo Roycheese bot')
        message.channel.send(newEmbed)
        
    }
}

