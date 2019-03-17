const express = require('express')
const bodyParser = require('body-parser')
const verification = require('./controllers/verification')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', verification)

app.listen(3000, () => console.log('Webhook server is listening, port 3000'))
