/* global describe: false, it: false */

const assert = require('assert')

const baseValidator = require('../lib/base.js')
const dateValidator = require('../lib/date.js')
const emailValidator = require('../lib/email.js')
const emptyValidator = require('../lib/empty.js')
const isbn10Validator = require('../lib/isbn10.js')
const isbn13Validator = require('../lib/isbn13.js')
const notEmptyValidator = require('../lib/notEmpty.js')
const numberValidator = require('../lib/number.js')
const phoneValidator = require('../lib/phone.js')
const priceValidator = require('../lib/price.js')
const salesforceIdValidator = require('../lib/salesforceid.js')
const urlValidator = require('../lib/url.js')

describe('lib/base.js', () => {
  it('baseValidator', () => {
    assert.ok(baseValidator('test') === '', 'returns expected value')
  })
})

describe('lib/date.js', () => {
  it('dateValidator', () => {
    assert.ok(dateValidator('1970-01-01') === '')
    assert.ok(dateValidator() === '')
    assert.ok(dateValidator('') === '')
    assert.ok(dateValidator('test') !== '')
    assert.ok(dateValidator('1970-01-32') !== '')
  })
})

describe('lib/email.js', () => {
  it('emailValidator', () => {
    assert.ok(emailValidator('test@example.com') === '')
    assert.ok(emailValidator() === '')
    assert.ok(emailValidator('') === '')
    assert.ok(emailValidator('test') !== '')
  })
})

describe('lib/empty.js', () => {
  it('emptyValidator', () => {
    assert.ok(emptyValidator('') === '')
    assert.ok(emptyValidator([]) === '')
    assert.ok(emptyValidator(null) === '')
    assert.ok(emptyValidator() === '')
  })
})

describe('lib/isbn10.js', () => {
  it('isbn10Validator', () => {
    assert.ok(isbn10Validator('123456789X') === '')
    assert.ok(isbn10Validator('1234567890') !== '')
    assert.ok(isbn10Validator('123456789a0') !== '')
    assert.ok(isbn10Validator('9781234567') !== '')
    assert.ok(isbn10Validator() === '')
    assert.ok(isbn10Validator('') === '')
  })
})

describe('lib/isbn13.js', () => {
  it('isbn13Validator', () => {
    assert.ok(isbn13Validator('9781234567897') === '')
    assert.ok(isbn13Validator('9781111111120') === '')
    assert.ok(isbn13Validator('9781234567898') !== '')
    assert.ok(isbn13Validator('test') !== '')
    assert.ok(isbn13Validator() === '')
    assert.ok(isbn13Validator('') === '')
  })
})

describe('lib/notEmpty.js', () => {
  it('notEmptyValidator', () => {
    assert.ok(notEmptyValidator('test') === '')
    assert.ok(notEmptyValidator('') !== '')
  })
})

describe('lib/number.js', () => {
  it('numberValidator', () => {
    assert.ok(numberValidator(1) === '')
    assert.ok(numberValidator('1') === '')
    assert.ok(numberValidator('-1') === '')
    assert.ok(numberValidator('-1.25') === '')
    assert.ok(numberValidator('frenchtoast') !== '')
    assert.ok(numberValidator(0 / 0) !== '')
    assert.ok(numberValidator('') === '')
    assert.ok(numberValidator() === '')
  })
})

describe('lib/phone.js', () => {
  it('phoneValidator', () => {
    assert.ok(phoneValidator('555-555-5555') === '')
    assert.ok(phoneValidator() === '')
    assert.ok(phoneValidator('5a5-555-5555') !== '')
  })
})

describe('lib/price.js', () => {
  it('priceValidator', () => {
    assert.ok(priceValidator(0.01) === '')
    assert.ok(priceValidator(-0.01) === '')
    assert.ok(priceValidator('0.01') === '')
    assert.ok(priceValidator('$0.01') !== '')
    assert.ok(priceValidator({}) !== '')
    assert.ok(priceValidator() === '')
    assert.ok(priceValidator('') === '')
  })
})

describe('lib/salesforceid.js', () => {
  describe('salesforceIdValidator', () => {
    assert.ok(salesforceIdValidator('0013000000OPJEkAAP') === '')
    assert.ok(salesforceIdValidator('test') !== '')
    assert.ok(salesforceIdValidator('') === '')
    assert.ok(salesforceIdValidator() === '')
  })
})

describe('lib/url.js', () => {
  it('urlValidator', () => {
    assert.ok(urlValidator('http://example.com') === '')
    assert.ok(urlValidator('') === '')
    assert.ok(urlValidator() === '')
    assert.ok(urlValidator('whaattttt') !== '')
  })
})
