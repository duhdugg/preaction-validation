import baseValidator from './base.js'
import emptyValidator from './empty.js'

const notEmptyValidator = (value) => {
  let message = baseValidator(value)
  if (!emptyValidator(value)) {
    message = 'This field is required.'
  }
  return message
}

export default notEmptyValidator
