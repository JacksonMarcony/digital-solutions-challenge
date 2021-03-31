const validator = require('validator');

exports.validation = async (req, res, next) => {
	try {
		const { name, email } = req.body
		const verifyEmail = validator.isEmail(email)
		
		if (verifyEmail === false) {
			throw new Error()
		}

		nameVerify = name.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '')
		
		req.verifyDatas = {
			"name":	nameVerify,
		}

		next()
	} catch (error) {
		return res.json({
			"error": "The email is invalid",
			"status": 401
		}) 
	}	
}