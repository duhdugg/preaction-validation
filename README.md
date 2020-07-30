# Preaction validation

This is a small validation library.

## Validator Format

A validator should always take a value and return a string. Validity is determined by the returned string's length.

## Usage

Install with yarn or npm.

yarn:

```bash
yarn add @preaction/validation
```

npm:

```bash
npm install --save @preaction/validation
```

import

```javascript
import { emailValidator } from '@preaction/validation'
// or
const { emailValidator } = require('@preaction/validation')
```

use:

```javascript
let errorMessage
let valid

errorMessage = emailValidator('test@example.com')
valid = !errorMessage
console.debug(valid, errorMessage) // true, ''

errorMessage = emailValidator('test@example.')
valid = !errorMessage
console.debug(valid, errorMessage) // false, 'Enter a valid email.'
```

## Use In Browser With CDN

```
<!DOCTYPE html>
<html>
  <head>
    <title>Test</title>
  </head>
  <body>
    <script src="https://cdn.jsdelivr.net/gh/duhdugg/preaction-validation@v1.3.8/dist/preaction-validation.umd.min.js"></script>
    <script>
      var errorMessage = window['@preaction/validation'].emailValidator(
        'testing'
      )
      console.debug(errorMessage)
    </script>
  </body>
</html>
```
