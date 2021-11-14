const nodemailer = require('nodemailer')

const sendMail = (fullname, email, message) => {
  var Transport = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
      user: process.env.EMAIL_ID,
      pass: process.env.EMAIL_PASSWORD
    }
  })

  var mailOptions
  let sender = `Contact Form- ${fullname}`
  mailOptions = {
    from: sender,
    to: process.env.PERSONAL_EMAIL,
    subject: `${fullname} - ${email}`,
    html: `<p>${message}</p>`
  }

  Transport.sendMail(mailOptions, function (error) {
    if (error) {
      return error
    } else {
      return null
    }
  })
}

module.exports = sendMail
