import baseValidator from './base.js'

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
