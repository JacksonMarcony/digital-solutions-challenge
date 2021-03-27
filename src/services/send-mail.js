require('dotenv').config()

const mailjet = require ('node-mailjet')

const request = mailjet.connect(process.env.API_KEY, process.env.SECRET_KEY)
.post("send", {'version': 'v3.1'})
.request({
  "Messages":[
    {
      "From": {
        "Email": process.env.EMAIL_FROM,
        "Name": "Jackson Marcony"
      },
      "To": [
        {
          "Email": "teste@gmail.com",
          "Name": "Jackson Marcony"
        }
      ],
      "Subject": "Greetings from Mailjet.",
      "TextPart": "My first Mailjet email",
      "HTMLPart": "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
      "CustomID": "AppGettingStartedTest"
    }
  ]
})
request
  .then((result) => {
    console.log(result.body)
  })
  .catch((err) => {
    console.log(err.statusCode)
  })
