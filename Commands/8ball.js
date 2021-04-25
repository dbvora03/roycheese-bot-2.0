const Discord = require("discord.js");

const replies = require('../Data/replies.json');

module.exports = {
    name: '8ball',
    description: "this is the help command",
    execute(client, message, args, Discord) {
        if(!args[0]) return message.reply("Please ask a full question");

        let reply_instance = replies[Math.floor(Math.random() * replies.length)]
        let question = args.slice(0).join(" ");
    
        let embed = new Discord.MessageEmbed()
        .setTitle("Roycheese ball")
        .setColor("#000000")
        .addField("Question:", question)
        .addField("My Prediction:", reply_instance)    
        message.channel.send({embed});
    }
}
