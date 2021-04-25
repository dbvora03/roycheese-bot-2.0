const { User } = require('discord.js');
const profile = require('../Models/profileSchema')
const Discord = require("discord.js")

module.exports = {
    name: 'count',
    description: 'checks count',
    help:{name: '`%count <@user>`', value: 'Reveals how much money this user owes in the "competition"'},

    async execute (client, message, args, Discord) {

        let parsedUser;

        if(!args[0]) {
            parsedUser = message.member.id
        } else {
            parsedUser = args[0].replace("<@!", "").replace(">", "")
        }

        let profileData;
        try {

            let profileData = await profile.findOne({userID: parsedUser})


            if(profileData) {
                profile.findOne({userID: parsedUser}).then(user=> {

                    const newEmbed = new Discord.MessageEmbed()
                    .setColor('#dd5d5d')
                    .setTitle(`${user.username}`)
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

