const baseValidator = require('./base.js')

export default value => {
  let message = baseValidator(value)
  if (value) {
    let expression = /^([a-zA-Z0-9_\-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/gi
    let regex = new RegExp(expression)
    if (value.search(regex) < 0) {
      message = 'Enter a valid email.'
    }
  }
  return message
}
