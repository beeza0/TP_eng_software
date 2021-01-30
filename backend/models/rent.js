const mongoose = require('mongoose')

const rent = new mongoose.Schema({
    idBike: {
        type: Number,
        required: true
    },
    cpfUser: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})