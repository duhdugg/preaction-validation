const baseValidator = require('./base.js')

const priceValidator = value => {
  let message = baseValidator(value)
  let errorMessage = 'Enter a valid price.'
  if (value) {
    if (typeof value === 'string') {
      if (value.search(/^(\d*|\d*\.\d\d)$/g) < 0) {
        message = errorMessage
      }
    } else {
      if (typeof value !== 'number') {
        message = errorMessage
      }
    }
  }
  return message
}

priceValidator.default = priceValidator
module.exports = priceValidator
