/*
 * @module
 */
import baseValidator from './base.js'

/**
 * @method emailValidator
 *
 * @param {string} value the input you are validating
 * @returns {string} error message or empty string
 *
 * @example
 * const errorMessage = emailValidator('test@example.com') // ''
 * const valid = !errorMessage // true
 */
const emailValidator = (value) => {
  let message = baseValidator(value)
  if (value) {
    const expression =
      /^([a-zA-Z0-9_\-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/gi
    const regex = new RegExp(expression)
    if (value.search(regex) < 0) {
      message = 'Enter a valid email.'
    }
  }
  return message
}

export default emailValidator
