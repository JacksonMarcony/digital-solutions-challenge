const cron = require('node-cron')
const mongoose = require('../schema')
const { sendMail } = require('../services/send-mail')

const scheduleTask = async () => {
	const events = await mongoose.find()
	return events
} 

const sendMailForAllLeads = async ({ title, description }) => {
	try {
		const leads = await mongoose.lead.find()
	
		leads.map(lead => {
			sendMail( lead.name, lead.email, title, description )
		})

	} catch (error) {
		console.log(error)
	}
}

exports.schedulerPush = async ({ minute, hour, day, month, title, description }) => {
	if (!minute) minute = '6'
	if (!hour) hour = '30'
	
	cron.schedule(`${minute} ${hour} ${day} ${month} *`, () => {
		sendMailForAllLeads({ title, description })
		// sendMail({ title, description })
	}, {
		scheduled: true,
		timezone: "America/Sao_Paulo"
	})
} 

exports.scheduler = async (req, res) => {
	const events = await scheduleTask()

	events.map((event) => {
		console.log(event.day)
		cron.schedule(`34 11 ${event.day} ${event.month} *`, () => {
		}, {
			scheduled: true,
			timezone: "America/Sao_Paulo"
		})
	})

	return res.json({"res": "agendado"})
}
