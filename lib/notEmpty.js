const baseValidator = require('./base.js')
const empty = require('./empty.js')

export default value => {
  let message = baseValidator(value)
  if (!empty(value)) {
    message = 'This field is required.'
  }
  return message
}
