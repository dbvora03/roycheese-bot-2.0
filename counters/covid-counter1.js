const axios = require('axios')


module.exports = async (client) => {

    const guild = client.guilds.cache.get('244978391260987393')
    const channel = guild.channels.cache.get('834625920215547905');
    const channeltwo = guild.channels.cache.get('834624381279141919');
    setInterval(()=> {
        axios.get('https://api.covid19tracker.ca/summary').then((response)=> {

            channel.setName(`Total Cases: ${response.data.data[0].total_cases.toLocaleString()}`)
            channeltwo.setName(`Total Vaccinated: ${response.data.data[0].total_vaccinated.toLocaleString()}`)

        })
    }, 4000)
}