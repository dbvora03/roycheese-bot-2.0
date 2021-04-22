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
                                        {name: '`%8ball <question>`', value: 'Predicts the outcome of a message'},
                                        {name: '`%image <image-name>`', value: 'Finds an image from the internet'},
                                        {name: '`%spongebob <caption>`', value: 'Creates the mocking spongebob meme'},
                                        {name: '`%monkeymeme <caption>`', value: 'Creates orangutan meme'},
                                        {name: '`%monkey`', value: 'Sends random monkey'}

                                    )
                                    .setImage('https://ofis.uwaterloo.ca/profile/sssaini.png')
                                    .setFooter('xoxo Roycheese bot')
        message.channel.send(newEmbed)
    }
}