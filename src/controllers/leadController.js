const mongoose = require('../schema').lead

exports.index = async (req, res) => {
    try {
        const leads = await mongoose.find()
        return res.json(leads)

    } catch (error) {
        return res.status(500).json({
            error
        })
    }
}

exports.create = async (req, res) => {
    const { email } = req.body
    const { name } = req.verifyDatas

    await new mongoose({
        name,
        email
    })
    .save()
    .then(resolve => {
        const { id, name, email, date } = resolve
        return res.status(201).json({
            "response": "Lead created with successful",
            "status": 201,
            "lead": {
                id,
                name,
                email,
                date
            }
        })
    })
    .catch((error) => {
        return res.json({
            error,
            "status": 500
        })
    })
}