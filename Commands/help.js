module.exports = {
    name: 'help',
    description: "this is the help command",
    execute(client, message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
                                    .setColor('#dd5d5d')
                                    .setTitle("Here are a list of commands I can do:")
                                    .addFields(
                                        {name: '`%purge <amount>`', value: 'Clears <amount> most recent messages'},
                                        {name: '`%8ball <question>`', value: 'Predicts the outcome of a message'},
                                        {name: '`%image <image-name>`', value: 'Finds an image from the internet'},
                                        {name: '`%spongebob <caption>`', value: 'Creates the mocking spongebob meme'},
                                        {name: '`%monkeymeme <caption>`', value: 'Creates orangutan meme'},
                                        {name: '`%monkey`', value: 'Sends random monkey'},
                                        {name: '`%play <song>`', value: 'Plays song'},
                                        {name: '`%skip`', value: 'Skips song'},
                                        {name: '`%stop`', value: 'Stops queue'},
                                        {name: '`%register`', value: 'Registers user for the "competition"'},
                                        {name: '`%dollar <@user>`', value: 'Adds a dollar to the user\'s bank'},
                                        {name: '`%count <@user>`', value: 'Reveals how much money this user owes in the "competition"'},
                                    )
                                    .setImage('https://ofis.uwaterloo.ca/profile/sssaini.png')
                                    .setFooter('xoxo Roycheese bot')
        message.channel.send(newEmbed)
    }
}