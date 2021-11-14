const nodemailer = require('nodemailer')

const handler = async (req, res) => {
  if (req.method === 'POST') {
    try {
      const { fullname, email, message } = req.body

      const Transport = nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE,
        auth: {
          user: process.env.EMAIL_ID,
          pass: process.env.EMAIL_PASSWORD
        }
      })
      const mailOptions = {
        from: `Contact Form- ${fullname}`,
        to: process.env.PERSONAL_EMAIL,
        subject: `${fullname} - ${email}`,
        html: `<div><p>Full Name: ${fullname}<p><br/><p>Email: ${email}<p><br/><p>${message}</p></div>`
      }

      Transport.sendMail(mailOptions, function (error) {
        if (error) {
          res.status(503).send()
        } else {
          res.status(200).send()
        }
      })
    } catch (e) {
      res.status(500).send()
    }
  } else {
    res.status(405).send()
  }
}

module.exports = handler
