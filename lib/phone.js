/*
 * @module
 */
import baseValidator from './base.js'

/**
 * @method phoneValidator
 *
 * @param {string} value the input you are validating
 * @returns {string} error message or empty string
 *
 * @example
 * const errorMessage = phoneValidator('555-555-5555') // ''
 * const valid = !errorMessage // true
 */
const phoneValidator = (value) => {
  let message = baseValidator(value)
  const errorMessage = 'Enter a valid phone number.'
  if (value) {
    if (
      value.search(
        /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/gi
      ) < 0
    ) {
      message = errorMessage
    }
  }
  return message
}

export default phoneValidator
