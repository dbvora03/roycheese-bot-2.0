const ProfileModels = require('../Models/profileSchema')

module.exports = {
    name: 'register',
    description: 'registers user for counter ',
    execute (client, discord, message) {

        ProfileModels.find({userID: message.member.id, serverID: message.member.guild.id }).then(user=> {
            if(user) {
                message.channel.send("You have already been added")
            } else {

                let profile = ProfileModels.create({
                    userID : message.member.id,
                    serverID: message.member.guild.id,
                    counts: 0
                })

                profile.save().then(()=> {
                    message.channel.send("You have been added to the list")
                });
            }
        })
    }
}

