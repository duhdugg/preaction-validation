const baseValidator = require('./base.js')

module.exports = value => {
  let message = baseValidator(value)
  let errorMessage = 'Enter a valid phone number.'
  if (value) {
    if (value.search(/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/gi) < 0) {
      message = errorMessage
    }
  }
  return message
}
