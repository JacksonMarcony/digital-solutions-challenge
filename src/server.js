require('dotenv').config()

const express = require('express')
const routes = require('./routes')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(routes)

app.listen(process.env.PORT, () => console.log(`🔥server running at port 🔥${process.env.PORT}🔥`))
