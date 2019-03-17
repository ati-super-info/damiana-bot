const
  API_AI_TOKEN = '',
  ApiAI_Client = require('apiai')(API_AI_TOKEN),
  FACEBOOK_ACCESS_TOKEN = '',
  request = require('request')

const sendText = (senderId, text) => {
  request({
    url: 'https://graph.facebook.com/v2.6/me/messages',
    qs: { access_token: FACEBOOK_ACCESS_TOKEN },
    method: 'POST',
    json: {
      recipient: {id: senderId},
      message: {text}
    }
  })
}

module.exports = (event) => {
  const
  senderId = event.sender.id,
  message = event.message.text,
  apiaiSession = apiAiClient.textRequest(message, {sessionId: 'damiana_bot'})

  apiaiSession.on('response', (res) => {
    const result = response.result.fulfillment.speech

    sendTextMessage(senderId, result)
  })
  apiaiSession.on('error', error => console.log(error))
  apiaiSession.end()

}
