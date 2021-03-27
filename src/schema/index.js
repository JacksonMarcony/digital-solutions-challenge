const mongoose = require('mongoose')
const leadSchema = require('./lead-modal')

mongoose.connect('mongodb://localhost:27017/', 
    {useNewUrlParser: true, 
    useUnifiedTopology: true})
    .then(resolve => console.log("banco conectado", resolve))
    .catch(error => console.log(error))

mongoose.model('Lead', leadSchema)

module.exports = mongoose