const baseValidator = require('./base.js')

const urlValidator = value => {
  let message = baseValidator(value)
  const errorMessage = 'Enter a valid URL.'
  const expression = /[-a-zA-Z0-9@:%_+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_+.~#?&//=]*)?/gi
  const regex = new RegExp(expression)
  if (value) {
    if (value.search(regex) < 0) {
      message = errorMessage
    }
  }
  return message
}

module.exports = urlValidator
