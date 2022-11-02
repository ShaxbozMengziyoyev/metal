const express = require('express')
const router = express.Router()

const sms = require('./sms/sms')


router 
  .get('/', sms.GET)
  .post('/', sms.POST)
  .delete('/', sms.deleteSms)
  .put('/', sms.PUT)

module.exports = router