const baseValidator = require('./dist/base.min.js')
const dateValidator = require('./dist/date.min.js')
const emailValidator = require('./dist/email.min.js')
const emptyValidator = require('./dist/empty.min.js')
const isbn10Validator = require('./dist/isbn10.min.js')
const isbn13Validator = require('./dist/isbn13.min.js')
const notEmptyValidator = require('./dist/notEmpty.min.js')
const numberValidator = require('./dist/number.min.js')
const phoneValidator = require('./dist/phone.min.js')
const priceValidator = require('./dist/price.min.js')
const salesforceIdValidator = require('./dist/salesforceid.min.js')
const urlValidator = require('./dist/url.min.js')

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
