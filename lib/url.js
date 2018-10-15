const baseValidator = require('./base.js')

export default value => {
  let message = baseValidator(value)
  let errorMessage = 'Enter a valid URL.'
  let expression = /[-a-zA-Z0-9@:%_+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_+.~#?&//=]*)?/gi
  let regex = new RegExp(expression)
  if (value) {
    if (value.search(regex) < 0) {
      message = errorMessage
    }
  }
  return message
}
