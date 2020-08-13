/*
 * @module
 */
import baseValidator from './base.js'
import emptyValidator from './empty.js'

/**
 * @method notEmptyValidator
 *
 * @param {string} value the input you are validating
 * @returns {string} error message or empty string
 *
 * @example
 * const errorMessage = notEmptyValidator('foo') // ''
 * const valid = !errorMessage // true
 */
const notEmptyValidator = (value) => {
  let message = baseValidator(value)
  if (!emptyValidator(value)) {
    message = 'This field is required.'
  }
  return message
}

export default notEmptyValidator
