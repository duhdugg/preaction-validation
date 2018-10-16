/* global describe: false, it: false */

import preactionValidation, {
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
} from 'preaction-validation'

const assert = require('assert')

describe('modules import with named and default scope', () => {
  it('baseValidator', () => {
    assert.ok(baseValidator() === '')
    assert.ok(preactionValidation.baseValidator() === '')
  })
  it('dateValidator', () => {
    assert.ok(dateValidator('2019-13-31') !== '')
    assert.ok(preactionValidation.dateValidator('2019-13-31') !== '')
  })
  it('emailValidator', () => {
    assert.ok(emailValidator('example') !== '')
    assert.ok(preactionValidation.emailValidator('example') !== '')
  })
  it('emptyValidator', () => {
    assert.ok(emptyValidator('') === '')
    assert.ok(preactionValidation.emptyValidator('') === '')
  })
  it('isbn10Validator', () => {
    assert.ok(isbn10Validator('test') !== '')
    assert.ok(preactionValidation.emptyValidator('') === '')
  })
  it('isbn13Validator', () => {
    assert.ok(isbn13Validator('test') !== '')
    assert.ok(preactionValidation.isbn13Validator('test') !== '')
  })
  it('notEmptyValidator', () => {
    assert.ok(notEmptyValidator('test') === '')
    assert.ok(preactionValidation.notEmptyValidator('test') === '')
  })
  it('numberValidator', () => {
    assert.ok(numberValidator('1') === '')
    assert.ok(preactionValidation.numberValidator('1') === '')
  })
  it('phoneValidator', () => {
    assert.ok(phoneValidator('test') !== '')
    assert.ok(preactionValidation.phoneValidator('test') !== '')
  })
  it('priceValidator', () => {
    assert.ok(priceValidator('test') !== '')
    assert.ok(preactionValidation.priceValidator('test') !== '')
  })
  it('salesforceIdValidator', () => {
    assert.ok(salesforceIdValidator('test') !== '')
    assert.ok(preactionValidation.salesforceIdValidator('test') !== '')
  })
  it('urlValidator', () => {
    assert.ok(urlValidator('test') !== '')
    assert.ok(preactionValidation.urlValidator('test') !== '')
  })
})
