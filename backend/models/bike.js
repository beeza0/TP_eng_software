const mongoose = require('mongoose')

const bike = new mongoose.Schema({
    serieNumber: {
        type: Number,
        required: true
    },
    id: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('bikerent', bike)