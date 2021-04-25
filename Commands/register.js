const ProfileModels = require('../Models/profileSchema')

module.exports = {
    name: 'register',
    description: 'registers user for counter ',
    help:{name: '`%register`', value: 'Registers user for the "competition"'},

    execute (client, message, args, Discord) {

        ProfileModels.find({userID: message.member.id, serverID: message.member.guild.id }).then(user=> {

                let profile = ProfileModels.create({
                    userID : message.member.id,
                    serverID: message.member.guild.id,
                    counts: 0
                })

                profile.save().then(()=> {
                    message.channel.send("You have been registered on the sex offenders list")
                });
            
        })
    }
}

