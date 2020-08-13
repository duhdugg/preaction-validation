/*
 * @module
 */
import baseValidator from './base.js'

/**
 * @method numberValidator
 *
 * @param {string} value the input you are validating
 * @returns {string} error message or empty string
 *
 * @example
 * const errorMessage = numberValidator('23') // ''
 * const valid = !errorMessage // true
 */
const numberValidator = (value) => {
  let message = baseValidator(value)
  if (value) {
    if (typeof value === 'string') {
      if (value.search(/^-?[0-9]+([.][0-9]+)?$/g) < 0) {
        message = 'Enter a valid number.'
      }
    }
  } else if (value !== undefined && isNaN(value)) {
    message = 'Enter a valid number.'
  }
  return message
}

export default numberValidator
