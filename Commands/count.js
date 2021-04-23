const { User } = require('discord.js');
const ProfileModels = require('../Models/profileSchema')
const Discord = require("discord.js")

module.exports = {
    name: 'count',
    description: 'checks count',
    async execute (client, discord, message, args) {

        let parsedUser;

        if(!args[0]) {
            parsedUser = message.member.id
        } else {
            parsedUser = args[0].replace("<@!", "").replace(">", "")
        }

        console.log(parsedUser)
        let profileData;
        try {

            let profileData = await ProfileModels.findOne({userID: parsedUser})

            if(profileData) {
                ProfileModels.findOne({userID: parsedUser}).then(user=> {

                    console.log(user)
                    const newEmbed = new Discord.MessageEmbed()
                    .setColor('#dd5d5d')
                    .setTitle(`This user owes`)
                    .setDescription(`$${user.counts} to charity`)
                    .setFooter('xoxo Roycheese bot')
                
                    message.channel.send(newEmbed)
                })
            } else {
                message.channel.send("This user has not been registered, tell them to use the `%register` command")
            }

        } catch(err) {
            console.log(err)
        }

    }
}

