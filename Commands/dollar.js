const { User } = require('discord.js');
const ProfileModels = require('../Models/profileSchema')
const Discord = require("discord.js")

module.exports = {
    name: 'dollar',
    description: 'adds dollar to username',
    async execute (client, message, args, Discord) {

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
            console.log(profileData)

            if(profileData) {
                ProfileModels.findOneAndUpdate({userID: parsedUser}, {$inc : {counts: 1}})
                message.channel.send("Ive added a dollar to your balance")
            } else {
                message.channel.send("This user has not been registered, tell them to use the `%register` command")
            }

        } catch(err) {
            console.log(err)
        }

    }
}

