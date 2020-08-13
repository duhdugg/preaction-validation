/*
 * @module
 */
import baseValidator from './base.js'

/**
 * @method isbn13Validator
 * @see {@link https://en.wikipedia.org/wiki/International_Standard_Book_Number#ISBN-13_check_digit_calculation|Wikipedia: ISBN-13 check digit calculation}
 *
 * @param {string} value the input you are validating
 * @returns {string} error message or empty string
 *
 * @example
 * const errorMessage = isbn13Validator('9781234567897') // ''
 * const valid = !errorMessage // true
 */
const isbn13Validator = (value) => {
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

export default isbn13Validator
