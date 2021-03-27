const express = require('express')
const routes = express.Router()

const LeadController = require('./controllers/leadController') 

routes
    .get('/api/v1/leads', )
    .post('/api/v1/leads', LeadController.index)


module.exports = routes
