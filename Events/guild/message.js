

module.exports = (Discord, client, message) => {
    const prefix = '%'

    if (!message.content.startsWith(prefix) || message.author.bot) {
        if(message.content.includes(process.env.SECRET_WORD) || message.content.includes(process.env.SECRET_WORD2)) {
            message.channel.send("Woah, thats the nono-word.")
            return client.commands.get('dollar').execute(client, message, Discord)
        } else {
            return 
        }
    }

    let args = message.content.substring(prefix.length).split(" ")
    const cmd = args.shift().toLowerCase()

    if(client.commands.get(cmd)) client.commands.get(cmd).execute(client, message, args, Discord)
}