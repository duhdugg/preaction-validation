/*
 * @module
 */
import baseValidator from './base.js'

/**
 * @method salesforceIdValidator
 *
 * @param {string} value the input you are validating
 * @returns {string} error message or emptry string
 *
 * @example
 * const errorMessage = salesforceIdValidator('906F0000000BQGnIAO') // ''
 * const valid = !errorMessage // true
 */
const salesforceIdValidator = (value) => {
  let message = baseValidator(value)
  const errorMessage = 'Enter a valid Salesforce ID.'
  if (value) {
    const salesforceid = value.replace(/A-z\w/g, '')
    if (salesforceid.search(/^[a-zA-Z0-9]{18}$|^[a-zA-Z0-9]{15}$/g) < 0) {
      message = errorMessage
    }
  }
  return message
}

export default salesforceIdValidator
