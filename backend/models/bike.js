const mongoose = require('mongoose')

const bike = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    price: {
        type: String,
    },
    imgUrl : {
        type: String,
    }
})

module.exports = mongoose.model('bikes', bike)