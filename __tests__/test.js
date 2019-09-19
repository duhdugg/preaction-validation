/* global describe, it */

const assert = require('assert')
const index = require('../lib/index.js')
const nodeModule = require('../dist/preaction-validation.min.js')

describe('lib/base.js', () => {
  it('baseValidator', () => {
    assert.ok(index.baseValidator('test') === '', 'returns expected value')
  })
})

describe('lib/date.js', () => {
  it('dateValidator', () => {
    assert.ok(index.dateValidator('1970-01-01') === '')
    assert.ok(index.dateValidator() === '')
    assert.ok(index.dateValidator('') === '')
    assert.ok(index.dateValidator('test') !== '')
    assert.ok(index.dateValidator('1970-01-32') !== '')
  })
})

describe('lib/email.js', () => {
  it('emailValidator', () => {
    assert.ok(index.emailValidator('test@example.com') === '')
    assert.ok(index.emailValidator() === '')
    assert.ok(index.emailValidator('') === '')
    assert.ok(index.emailValidator('test') !== '')
  })
})

describe('lib/empty.js', () => {
  it('emptyValidator', () => {
    assert.ok(index.emptyValidator('') === '')
    assert.ok(index.emptyValidator([]) === '')
    assert.ok(index.emptyValidator(null) === '')
    assert.ok(index.emptyValidator() === '')
  })
})

describe('lib/isbn10.js', () => {
  it('isbn10Validator', () => {
    // https://en.wikipedia.org/wiki/International_Standard_Book_Number#ISBN-10_check_digit_calculation
    assert.ok(index.isbn10Validator('123456789X') === '')
    assert.ok(index.isbn10Validator('1234567890') !== '')
    assert.ok(index.isbn10Validator('123456789a0') !== '')
    assert.ok(index.isbn10Validator('9781234567') !== '')
    assert.ok(index.isbn10Validator() === '')
    assert.ok(index.isbn10Validator('') === '')
  })
})

describe('lib/isbn13.js', () => {
  it('isbn13Validator', () => {
    // https://en.wikipedia.org/wiki/International_Standard_Book_Number#ISBN-13_check_digit_calculation
    assert.ok(index.isbn13Validator('9781234567897') === '')
    assert.ok(index.isbn13Validator('9781111111120') === '')
    assert.ok(index.isbn13Validator('9781234567898') !== '')
    assert.ok(index.isbn13Validator('test') !== '')
    assert.ok(index.isbn13Validator() === '')
    assert.ok(index.isbn13Validator('') === '')
  })
})

describe('lib/notEmpty.js', () => {
  it('notEmptyValidator', () => {
    assert.ok(index.notEmptyValidator('test') === '')
    assert.ok(index.notEmptyValidator('') !== '')
  })
})

describe('lib/number.js', () => {
  it('numberValidator', () => {
    assert.ok(index.numberValidator(1) === '')
    assert.ok(index.numberValidator('1') === '')
    assert.ok(index.numberValidator('-1') === '')
    assert.ok(index.numberValidator('-1.25') === '')
    assert.ok(index.numberValidator('frenchtoast') !== '')
    assert.ok(index.numberValidator(0 / 0) !== '')
    assert.ok(index.numberValidator('') === '')
    assert.ok(index.numberValidator() === '')
  })
})

describe('lib/phone.js', () => {
  it('phoneValidator', () => {
    assert.ok(index.phoneValidator('555-555-5555') === '')
    assert.ok(index.phoneValidator() === '')
    assert.ok(index.phoneValidator('5a5-555-5555') !== '')
  })
})

describe('lib/price.js', () => {
  it('priceValidator', () => {
    assert.ok(index.priceValidator(0.01) === '')
    assert.ok(index.priceValidator(-0.01) === '')
    assert.ok(index.priceValidator('0.01') === '')
    assert.ok(index.priceValidator('$0.01') !== '')
    assert.ok(index.priceValidator({}) !== '')
    assert.ok(index.priceValidator() === '')
    assert.ok(index.priceValidator('') === '')
  })
})

describe('lib/salesforceid.js', () => {
  describe('salesforceIdValidator', () => {
    assert.ok(index.salesforceIdValidator('0013000000OPJEkAAP') === '')
    assert.ok(index.salesforceIdValidator('test') !== '')
    assert.ok(index.salesforceIdValidator('') === '')
    assert.ok(index.salesforceIdValidator() === '')
  })
})

describe('lib/url.js', () => {
  it('urlValidator', () => {
    assert.ok(index.urlValidator('http://example.com') === '')
    assert.ok(index.urlValidator('') === '')
    assert.ok(index.urlValidator() === '')
    assert.ok(index.urlValidator('whaattttt') !== '')
  })
})

describe('lib/index.js', () => {
  it('is an object indexing the validators', () => {
    assert.ok(index.baseValidator !== undefined)
  })
})

describe('dist/preaction-validation.min.js', () => {
  it('imports as commonjs', () => {
    assert.ok(nodeModule.baseValidator !== undefined)
  })
})
