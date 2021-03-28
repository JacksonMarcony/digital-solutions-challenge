const cron = require('node-cron')

const scheduleTask = async () => {
	const dates = filter
	
	const date = new Date()

	console.log(date)
} 

exports.scheduler = ({ minute, hour, month_day, month, week_day }) => {
	cron.schedule(`${minute} ${hour} ${month_day} ${month} ${week_day}`, () => {
		console.log('chegou o dia')
	}, {
		scheduled: true,
		timezone: "America/Sao_Paulo"
	})
}
