const mongoose = require('./index')

const leadSchema = mongoose.Schema({
    name: String,
    email: String
})

module.exports = leadSchema