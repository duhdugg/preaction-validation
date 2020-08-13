# Preaction Validation

This is a small validation library for JavaScript using a simple signature for its functions.

## Validator Function Signature

A validator function takes a single value argument and return a string. Validity is determined by the returned string's length.

## Install

### yarn

```bash
yarn add @preaction/validation
```

### npm

```bash
npm install --save @preaction/validation
```

### jsdelivr CDN

```html
<script src="https://cdn.jsdelivr.net/npm/@preaction/validation@latest/dist/preaction-validation.umd.min.js"></script>
```

_Remember to replace `latest` with the version number in production._

## Importing Functions

### ES Module

```js
import { notEmptyValidator } from '@preaction/validation'
```

### CommonJS Module

```js
const { notEmptyValidator } = require('@preaction/validation')
```

### IIFE

```js
const { notEmptyValidator } = window['@preaction/validation']
```

## API

See [API.md](API.md).
