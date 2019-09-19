const baseValidator = require('./base.js')

// https://en.wikipedia.org/wiki/International_Standard_Book_Number#ISBN-10_check_digit_calculation

const isbn10Validator = value => {
  let message = baseValidator(value)
  const errorMessage = 'Enter a valid 10-digit ISBN.'
  if (value) {
    const isbn = value.replace(/\W/g, '')
    if (isbn.search(/^\d{9}[\d|x|X]$/g) < 0) {
      message = errorMessage
    } else if (isbn.search(/^978/g) > -1) {
      message = errorMessage
    } else {
      let x = 0
      for (let d = 0; d < 10; d++) {
        const digit = isbn[d].toUpperCase() === 'X' ? 10 : Number(isbn[d])
        x += (10 - d) * digit
      }
      if (x % 11 !== 0) {
        message = errorMessage
      }
    }
  }
  return message
}

module.exports = isbn10Validator
