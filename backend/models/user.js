const mongoose = require('mongoose')

const user = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    cpf: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('users', user)