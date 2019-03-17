const
  express = require('express'),
  bodyParser = require('body-parser'),
  verification = require('./controllers/verification'),
  messageWebhook = require('./controllers/messageWebhook'),
  app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.listen(3000, () => console.log('Webhook server is listening, port 3000'))

app.get('/', verification)
app.post('/', messageWebhook)
