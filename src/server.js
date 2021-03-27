require('dotenv').config()

const express = require('express')
const routes = './routes'

const app = express()

app.use(express.json())
app.use(routes)

app.listen(process.env.PORT, () => console.log('🔥server running at port 🔥3333🔥'))
