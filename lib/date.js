/*
 * @module
 */
import baseValidator from './base.js'

/**
 * @method dateValidator
 *
 * @param {string} value the input you are validating
 * @returns {string} error message or empty string
 *
 * @example
 * const errorMessage = dateValidator('1970-01-01') // ''
 * const valid = !errorMessage // true
 */
const dateValidator = (value) => {
  let message = baseValidator(value)
  if (value) {
    const regex = new RegExp(/^\d{4}-\d\d-\d\d$/)
    if (!regex.test(value)) {
      message = 'Enter a valid date.'
    } else {
      const d = new Date(value)
      if (d.toTimeString() === 'Invalid Date') {
        message = 'Enter a valid date.'
      }
    }
  }
  return message
}

export default dateValidator
