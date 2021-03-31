const mongoose = require('../schema').event
const { schedulerPush } = require('./schedulerController') 

exports.index = async (req, res) => {
	try {
		const events = await mongoose.find()
		
		return res.json(events)
		
	} catch (error) {
		return res.json(error)
	}
}

exports.create = async (req, res) => {
	const { month, day, title, description, hour, minute } = req.body

	await new mongoose({
		month,
		day,
		title,
		description,
		hour,
		minute
	})
		.save()
		.then(async (resolve) => {
			
			const { month, day, title, description } = resolve
			
			await schedulerPush({month, day, title, description, hour, minute})
			
			return res.json({
				"response": "the event created with successful",
				"status": 201,
				"event": {
					month,
					day,
					title, 
					description,
					hour,
					minute
				}
			})
		})
		.catch(error => {
			return res.json({error})
		}) 
}