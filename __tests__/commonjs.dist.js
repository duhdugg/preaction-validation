/* global describe: false, it: false */

const assert = require('assert')

const baseValidator = require('preaction-validation').baseValidator
const dateValidator = require('preaction-validation').dateValidator
const emailValidator = require('preaction-validation').emailValidator
const emptyValidator = require('preaction-validation').emptyValidator
const isbn10Validator = require('preaction-validation').isbn10Validator
const isbn13Validator = require('preaction-validation').isbn13Validator
const notEmptyValidator = require('preaction-validation').notEmptyValidator
const numberValidator = require('preaction-validation').numberValidator
const phoneValidator = require('preaction-validation').phoneValidator
const priceValidator = require('preaction-validation').priceValidator
const salesforceIdValidator = require('preaction-validation')
  .salesforceIdValidator
const urlValidator = require('preaction-validation').urlValidator
const preactionValidation = require('preaction-validation')

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
