const baseValidator = require('./base.js')

export default value => {
  let message = baseValidator(value)
  if (value) {
    if (typeof value === 'string') {
      if (value.search(/^-?[0-9]+([.][0-9]+)?$/g) < 0) {
        message = 'Enter a valid number.'
      }
    }
  } else if (value === undefined) {
  } else if (isNaN(value)) {
    message = 'Enter a valid number.'
  }
  return message
}
