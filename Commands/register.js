const profile = require('../Models/profileSchema.js')
const mongoose = require('mongoose')


module.exports = {
    name: 'register',
    description: 'registers user for counter ',
    help:{name: '`%register`', value: 'Registers user for the "competition"'},

    async execute (client, message, args, Discord) {

        profile.findOne({userID: message.member.id, serverID: message.member.guild.id }).then(user=> {

            if(!user) {
                const profile_instance = new profile({
                                    userID : message.member.id,
                                    serverID: message.member.guild.id,
                                    counts: 0,
                                    username: message.member.user.username
                                })

                profile_instance.save().then(()=> {
                    return message.channel.send("You have been added")

                }).catch(err=> {
                    console.log(err)
                })

            } else {
                return message.channel.send("You have already been registered")
            }
        })
    }
}

