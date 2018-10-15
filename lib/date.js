const baseValidator = require('./base.js')

export default value => {
  let message = baseValidator(value)
  if (value) {
    let regex = new RegExp(/^\d{4}-\d\d-\d\d$/)
    if (!regex.test(value)) {
      message = 'Enter a valid date.'
    } else {
      let d = new Date(value)
      if (d.toTimeString() === 'Invalid Date') {
        message = 'Enter a valid date.'
      }
    }
  }
  return message
}
