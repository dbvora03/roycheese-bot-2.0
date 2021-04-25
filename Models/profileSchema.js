const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema({
    userID: {
        type: String,
        require: true
    },
    serverID: {
        type: String, 
        require: true
    },
    counts : {
        type: Number,
        default: 0,
        
    },
    username: {
        type: String,
        require: true
    }
})

const model = mongoose.model('profile', profileSchema)

module.exports = model;

