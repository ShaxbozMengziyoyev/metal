const PG = require('../../util/postgres')

class sms extends PG {
  getSms() {
    return this.fetchAll(
      'SELECT * FROM sms'
    )
  } 

  postSms(sms_name, sms_phone, sms_messages) {
    return this.fetch(
      'INSERT INTO sms(sms_name, sms_phone, sms_messages) VALUES($1, $2, $3) RETURNING *',
      sms_name, sms_phone, sms_messages
    )
  }

  deleteSms(sms_id) {
    return this.fetch(
      ` DELETE FROM 
        sms
      WHERE
        sms_id = $1
      RETURNING *
      `,
      sms_id
    )
  }

  updateAcademy(name, phone, messages, id) {
    return this.fetch(
        'UPDATE sms SET sms_name = $1, sms_phone = $2, sms_messages = $3 WHERE sms_id = $4 RETURNING *',
        name, phone, messages, id
    )
}

}

module.exports = new sms