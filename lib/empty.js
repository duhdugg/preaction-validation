import baseValidator from './base.js'

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
