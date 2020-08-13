/*
 * @module
 */
import baseValidator from './base.js'

/**
 * @method priceValidator
 *
 * @param {string} value the input you are validating
 * @returns {string} error message or empty string
 *
 * @example
 * const errorMessage = priceValidator('19.99') // ''
 * const valid = !errorMessage // true
 */
const priceValidator = (value) => {
  let message = baseValidator(value)
  const errorMessage = 'Enter a valid price.'
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

export default priceValidator
