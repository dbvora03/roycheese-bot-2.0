module.exports = {
    name: 'purge',
    description: "purge command, use responsibly",
    help: {name: '`%purge <amount>`', value: 'Clears <amount> most recent messages'},

    async execute(client, message, args, Discord) {

        console.log(args[0])
        if(!args[0]) {
            return message.reply("How many messages you want me to purge huh? You can't just expect me to know what's inside your head :neutral_face:")
        }
        if(isNaN(args[0])) return message.reply("Bro you want me to take you to kindergarten or something? I can't purge that many messages :neutral_face:")

        if (args[0] > 100) return message.reply("Woah chief tone it down, less than 100 please")
        if(args[0] < 1) return message.reply("you dumb or sumn ?")

        await message.channel.messages.fetch({limit: args[0]}).then(messages=> {
            message.channel.bulkDelete(messages)
        })
    }
}