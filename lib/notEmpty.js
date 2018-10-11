const baseValidator = require('./base.js')
const empty = require('./empty.js')

module.exports = value => {
  let message = baseValidator(value)
  if (!empty(value)) {
    message = 'This field is required.'
  }
  return message
}
