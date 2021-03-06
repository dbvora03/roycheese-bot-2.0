const { User } = require('discord.js');
const mongoose = require('mongoose')
const profile = mongoose.model("profile")
const Discord = require("discord.js")

module.exports = {
    name: 'dollar',
    description: 'adds dollar to username',
    help:{name: '`%dollar <@user>`', value: 'Adds a dollar to the user\'s bank'},

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
                profile.findOneAndUpdate({_id: profileData._id}, {$inc:{counts: 1}}, function(err,result) {
                                                                                                        if (err) {
                                                                                                        console.log(err)
                                                                                                        } else {
                                                                                                        console.log(result)
                                                                                                        }})

                //^^^^^
                message.channel.send("I've added a dollar to your balance, use `%count` or `%score` to see tallied up scores")
            } else {
                message.channel.send("This user has not been registered, tell them to use the `%register` command")
            }

        } catch(err) {
            console.log(err)
        }
    }
}

