const baseValidator = require('./base.js')

const dateValidator = value => {
  let message = baseValidator(value)
  if (value) {
    let regex = new RegExp(/^\d{4}-\d\d-\d\d$/)
    if (!regex.test(value)) {
      message = 'Enter a valid date.'
    } else {
      let d = new Date(value)
      if (d.toTimeString() === 'Invalid Date') {
        message = 'Enter a valid date.'
      }
    }
  }
  return message
}

dateValidator.default = dateValidator
module.exports = dateValidator
