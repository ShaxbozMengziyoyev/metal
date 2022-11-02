const model = require('./model')

module.exports = {
  GET: async(_, res) => {
    try {
      res.json(await model.getSms())
    } catch(err) {
      console.log(err)
    }
  },

  POST: async(req, res) => {
    try {
      const {name, phone, messages} = req.body
      const postSms = await model.postSms(name, phone, messages)
      res.json(postSms)
    } catch(err) {
      console.log(err)
    }
  },

  deleteSms: async(req, res) => {
    try {
        const { sms_id } = req.body
        const deletedSms = await model.deleteSms(sms_id)
        res.json(deletedSms)
    } catch(err) {
        res.sendStatus(500)
    }
  },

  PUT: async(req, res) => {
      try {
          const { id, name, phone,  messages } = req.body
          res.json(await model.updateAcademy(name, phone, messages, id))
      } catch(err) {
          console.log(err)
      }
  }
}