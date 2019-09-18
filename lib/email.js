const baseValidator = require('./base.js')

const emailValidator = value => {
  let message = baseValidator(value)
  if (value) {
    const expression = /^([a-zA-Z0-9_\-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/gi
    const regex = new RegExp(expression)
    if (value.search(regex) < 0) {
      message = 'Enter a valid email.'
    }
  }
  return message
}

module.exports = emailValidator
