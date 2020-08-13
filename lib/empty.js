/*
 * @module
 */
import baseValidator from './base.js'

/**
 * @method emptyValidator
 *
 * @param {string} value the input you are validating
 * @returns {string} error message or empty string
 *
 * @example
 * const errorMessage = emptyValidator('foo') // 'This field must be empty.'
 * const valid = !errorMessage // false
 */
const emptyValidator = (value) => {
  let message = baseValidator(value)
  const errorMessage = 'This field must be empty.'
  if (value !== undefined && value !== null && typeof value === 'string') {
    if (value.search(/^\s*$/g) < 0) {
      message = errorMessage
    }
  }
  return message
}

export default emptyValidator
