const baseValidator = require('./dist/base.min.js').default
const dateValidator = require('./dist/date.min.js').default
const emailValidator = require('./dist/email.min.js').default
const emptyValidator = require('./dist/empty.min.js').default
const isbn10Validator = require('./dist/isbn10.min.js').default
const isbn13Validator = require('./dist/isbn13.min.js').default
const notEmptyValidator = require('./dist/notEmpty.min.js').default
const numberValidator = require('./dist/number.min.js').default
const phoneValidator = require('./dist/phone.min.js').default
const priceValidator = require('./dist/price.min.js').default
const salesforceIdValidator = require('./dist/salesforceid.min.js').default
const urlValidator = require('./dist/url.min.js').default

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
  urlValidator,
  default: {
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
}
