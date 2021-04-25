const mongoose = require('mongoose')
const profile = mongoose.model("profile")
const Discord = require("discord.js")

module.exports = {
    name: 'clearuser',
    description: 'adds dollar to username',
    help:{name: '`%clearuser <@user>`', value: "Clears user's bank"},

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
            //check point

            if(profileData) {
                //checkpoint
                profile.findOneAndUpdate({_id: profileData._id}, {counts: 0}, function(err,result) {
                                                                                                        if (err) {
                                                                                                        console.log(err)
                                                                                                        } else {
                                                                                                        console.log(result)
                                                                                                        }})

                //^^^^^
                message.channel.send("I've cleared your balance")
            } else {
                message.channel.send("This user has not been registered, tell them to use the `%register` command")
            }

        } catch(err) {
            console.log(err)
        }
    }
}

