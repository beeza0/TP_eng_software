const mongoose = require('mongoose')

const rent = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    cpf: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('bikerents', rent)
