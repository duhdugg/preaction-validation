const baseValidator = require('./base.js')

const isbn13Validator = value => {
  let message = baseValidator(value)
  const errorMessage = 'Enter a valid 13-digit ISBN.'
  if (value) {
    const isbn = value.replace(/\W/g, '')
    if (isbn.search(/^978\d{10}$/g) < 0) {
      message = errorMessage
    } else {
      let total = 0
      for (let d = 0; d < isbn.length - 1; d++) {
        let multiplier = 1
        if (d % 2) {
          multiplier = 3
        }
        total += Number(isbn[d]) * multiplier
      }
      let check = 10 - (total % 10)
      if (check === 10) {
        check = 0
      }
      if (check !== Number(isbn[isbn.length - 1])) {
        message = errorMessage
      }
    }
  }
  return message
}

module.exports = isbn13Validator
