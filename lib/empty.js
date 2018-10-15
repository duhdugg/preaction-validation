const baseValidator = require('./base.js')

export default value => {
  let message = baseValidator(value)
  let errorMessage = 'This field must be empty.'
  if (value === undefined || value === null) {
  } else if (typeof value === 'string') {
    if (value.search(/^\s*$/g) < 0) {
      message = errorMessage
    }
  }
  return message
}
