# Preaction validation

This is a small validation library.

## Validator Format

A validator should always take a value and return a string. Validity is determined by the returned string's length.

## Usage

Install with yarn or npm.

yarn:

```bash
yarn add preaction-validation
```

npm:

```bash
npm install --save preaction-validation
```

importing and using:

```javascript
import { emailValidator } from 'preaction-validation'
let errorMessage
let valid

errorMessage = emailValidator('test@example.com')
valid = !errorMessage
console.debug(valid, errorMessage) // true, ''

errorMessage = emailValidator('test@example.')
valid = !errorMessage
console.debug(valid, errorMessage) // false, 'Enter a valid email.'
```
