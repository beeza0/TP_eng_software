const mongoose = require('mongoose')

const bike = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    color: {
        type: String,
    },
    price: {
        type: String,
    }
})

module.exports = mongoose.model('bikerent', bike)