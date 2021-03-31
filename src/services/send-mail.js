require('dotenv').config()
const mailjet = require ('node-mailjet')

exports.sendMail = async ( name, email, title, description ) => {
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
            "Email": email,
            "Name": name
          }
        ],
        "Subject": `${title}`,
        "TextPart": "Hoje é um dia especial",
        "HTMLPart": `
        <h2>${description}</h2>
        `,
        "CustomID": "AppGettingStartedTest"
      }
    ]
  })
  request
    .then((result) => {
      console.log("sended email with successful")
    })
    .catch((err) => {
      console.log("There was an error sending the email: ", err)
    })
}
