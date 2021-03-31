const express = require('express')
const routes = express.Router()

const validator = require('./middleware/validation').validation

const LeadController = require('./controllers/leadController') 
const EventController = require('./controllers/eventController')
const SchedulerController = require('./controllers/schedulerController')

routes
    .get('/api/v1/leads', LeadController.index)
    .post('/api/v1/leads', validator ,LeadController.create)

    .get('/api/v1/events', EventController.index)
    .post('/api/v1/events', EventController.create)

    .get('/api/v1/schedule-events', SchedulerController.scheduler)

module.exports = routes
