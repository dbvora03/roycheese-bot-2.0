const Scraper = require('images-scraper')
const Discord = require('discord.js')

const google = new Scraper({
    puppeteer:{
        headless:true
    }
})

module.exports = {
    name: 'image',
    description: 'scrapes image',
    help:{name: '`%image <image-name>`', value: 'Pulls an image from the internet'},

    async execute (client, message, args, Discord) {
        const image_query = args.join(' ')

        if(!image_query) {
            return message.channel.send('You want a pic of what?')
        } else {

            const image_results = await google.scrape(image_query, 1)

            const newEmbed = new Discord.MessageEmbed()
            .setColor('#dd5d5d')
            .setTitle("Your image")
            .setDescription(`Your seach: ${image_query}`)
            .setImage(`${image_results[0].url}`)
            .setFooter('xoxo Roycheese bot')
          
            message.channel.send(newEmbed)
        }

    }
}