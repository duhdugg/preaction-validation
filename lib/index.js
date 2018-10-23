const baseValidator = require('./base.js')
const dateValidator = require('./date.js')
const emailValidator = require('./email.js')
const emptyValidator = require('./empty.js')
const isbn10Validator = require('./isbn10.js')
const isbn13Validator = require('./isbn13.js')
const notEmptyValidator = require('./notEmpty.js')
const numberValidator = require('./number.js')
const phoneValidator = require('./phone.js')
const priceValidator = require('./price.js')
const salesforceIdValidator = require('./salesforceid.js')
const urlValidator = require('./url.js')

module.exports = {
  baseValidator,
  dateValidator,
  emailValidator,
  emptyValidator,
  isbn10Validator,
  isbn13Validator,
  notEmptyValidator,
  numberValidator,
  phoneValidator,
  priceValidator,
  salesforceIdValidator,
  urlValidator
}
module.exports.default = module.exports
