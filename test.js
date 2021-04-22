const axios = require('axios')

axios.get('https://api.covid19tracker.ca/summary').then((response)=> {
console.log(response.data.data[0].latest_date)
})