require('dotenv').config()

const mongoose = require('../schema/')

exports.index = async (req, res) => {
    await new mongoose({
        name: 'joao',
        email: 'jose@gmail.com'
    })

    return res.json('vlw')
}