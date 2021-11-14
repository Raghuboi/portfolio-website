const sendMail = require('../../server-utils/send-mail')

const handler = (req, res) => {
  if (req.method === 'POST') {
    try {
      const { fullname, email, message } = req.body

      const error = sendMail(fullname, email, message)
      if (!error) res.status(200).send()
      else res.status(500).send()
    } catch (e) {
      res.status(500).send()
    }
  } else {
    res.status(405).send()
  }
}

module.exports = handler
