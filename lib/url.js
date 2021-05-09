/*
 * @module
 */
import baseValidator from './base.js'

/**
 * @method urlValidator
 *
 * @param {string} value the input you are validating
 * @returns {string} error message or empty string
 *
 * @example
 * const errorMessage = urlValidator('https://github.com/duhdugg/preaction-validation') // ''
 * const valid = !errorMessage // true
 */
const urlValidator = (value) => {
  let message = baseValidator(value)
  const errorMessage = 'Enter a valid URL.'
  const expression =
    /[-a-zA-Z0-9@:%_+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_+.~#?&//=]*)?/gi
  const regex = new RegExp(expression)
  if (value) {
    if (value.search(regex) < 0) {
      message = errorMessage
    }
  }
  return message
}

export default urlValidator
