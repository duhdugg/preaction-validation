const baseValidator = require('./base.js')

module.exports = value => {
  let message = baseValidator(value)
  let errorMessage = 'Enter a valid Salesforce ID.'
  if (value) {
    let salesforceid = value.replace(/A-z\w/g, '')
    if (salesforceid.search(/^[a-zA-Z0-9]{18}$|^[a-zA-Z0-9]{15}$/g) < 0) {
      message = errorMessage
    }
  }
  return message
}
