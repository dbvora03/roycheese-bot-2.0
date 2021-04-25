const covidcounter1 = require('../../counters/covid-counter1')
const covidcounter2 = require('../../counters/covid-counter2')
const client = require('../../index')

module.exports = () => {
    covidcounter1(client)
    covidcounter2(client)
    console.log('Roycheese bot is online')
}