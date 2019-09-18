const baseValidator = require('./base.js')

const phoneValidator = value => {
  let message = baseValidator(value)
  const errorMessage = 'Enter a valid phone number.'
  if (value) {
    if (
      value.search(
        /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/gi
      ) < 0
    ) {
      message = errorMessage
    }
  }
  return message
}

module.exports = phoneValidator
