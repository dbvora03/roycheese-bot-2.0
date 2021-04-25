
const fs = require('fs')
const Discord = require('discord.js')

module.exports = (client, Discord) => {

    const load_dir = (dir) => {
        const event_files = fs.readdirSync(`./Events/${dir}`).filter(file => file.endsWith('.js'))

        for (const file of event_files) {
            const event = require(`../Events/${dir}/${file}`)
            const event_name = file.split('.')[0]

            client.on(event_name, event.bind(null, Discord, client))        
        }
    }

    ['client', 'guild'].forEach(e => load_dir(e))
}