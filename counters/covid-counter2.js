const axios = require('axios')


module.exports = async (client) => {

    const guild = client.guilds.cache.get('755498918627770389')
    const channel = guild.channels.cache.get('834509133305741322');

    setInterval(()=> {
        axios.get('https://api.covid19tracker.ca/summary').then((response)=> {
            channel.setName(`Total Cases: ${response.data.data[0].total_cases.toLocaleString()}`)

        })
    }, 5000)
}