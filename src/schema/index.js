const mongoose = require('mongoose')

const leadSchema = require('./lead-modal')
const eventSchema = require('./event-modal') 

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/push-leads', {
	useNewUrlParser: true, useUnifiedTopology: true
})
    .then(resolve => console.log("banco conectado"))
    .catch(error => console.log("deu erro ao conectar", error))


const lead = leadSchema
const event = eventSchema

module.exports = {lead, event}