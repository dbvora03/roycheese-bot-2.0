const { User } = require('discord.js');
const mongoose = require('mongoose')
const profile = mongoose.model("profile")
const Discord = require("discord.js")

module.exports = {
    name: 'score',
    description: 'adds dollar to username',
    help:{name: '`%score`', value: 'Reveals server scoreboard'},

    async execute (client, message, args, Discord) {

        let user_array = []
        const all_users = await profile.find({serverID: message.member.guild.id})

        for(const user of all_users) {
            user_array.push({name: `${user.username} owes $${user.counts}`, value: `_________ `})
        }
        const newEmbed = new Discord.MessageEmbed()
                                    .setColor('#dd5d5d')
                                    .setTitle("Here are the tallied up scores")
                                    .addFields(user_array)
                                    .setFooter('xoxo Roycheese bot')
        
        message.channel.send(newEmbed)
    }
}

