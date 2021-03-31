const mongoose = require('mongoose')

const eventSchema = mongoose.Schema({
    month: {
        type: String,
        required: true
    },
    day: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    hour: {
        type: Number
    },
    minute: {
        type: Number
    }
})

module.exports = mongoose.model('events', eventSchema)