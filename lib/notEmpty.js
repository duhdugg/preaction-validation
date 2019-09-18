const baseValidator = require('./base.js')
const empty = require('./empty.js')

const notEmptyValidator = value => {
  let message = baseValidator(value)
  if (!empty(value)) {
    message = 'This field is required.'
  }
  return message
}

module.exports = notEmptyValidator
