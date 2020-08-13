## Functions

<dl>
<dt><a href="#dateValidator">dateValidator(value)</a> ⇒ <code>string</code></dt>
<dd></dd>
<dt><a href="#emailValidator">emailValidator(value)</a> ⇒ <code>string</code></dt>
<dd></dd>
<dt><a href="#emptyValidator">emptyValidator(value)</a> ⇒ <code>string</code></dt>
<dd></dd>
<dt><a href="#isbn10Validator">isbn10Validator(value)</a> ⇒ <code>string</code></dt>
<dd></dd>
<dt><a href="#isbn13Validator">isbn13Validator(value)</a> ⇒ <code>string</code></dt>
<dd></dd>
<dt><a href="#notEmptyValidator">notEmptyValidator(value)</a> ⇒ <code>string</code></dt>
<dd></dd>
<dt><a href="#numberValidator">numberValidator(value)</a> ⇒ <code>string</code></dt>
<dd></dd>
<dt><a href="#phoneValidator">phoneValidator(value)</a> ⇒ <code>string</code></dt>
<dd></dd>
<dt><a href="#priceValidator">priceValidator(value)</a> ⇒ <code>string</code></dt>
<dd></dd>
<dt><a href="#salesforceIdValidator">salesforceIdValidator(value)</a> ⇒ <code>string</code></dt>
<dd></dd>
<dt><a href="#urlValidator">urlValidator(value)</a> ⇒ <code>string</code></dt>
<dd></dd>
</dl>

<a name="dateValidator"></a>

## dateValidator(value) ⇒ <code>string</code>
**Kind**: global function  
**Returns**: <code>string</code> - error message or empty string  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | the input you are validating |

**Example**  
```js
const errorMessage = dateValidator('1970-01-01') // ''
const valid = !errorMessage // true
```

* * *

<a name="emailValidator"></a>

## emailValidator(value) ⇒ <code>string</code>
**Kind**: global function  
**Returns**: <code>string</code> - error message or empty string  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | the input you are validating |

**Example**  
```js
const errorMessage = emailValidator('test@example.com') // ''
const valid = !errorMessage // true
```

* * *

<a name="emptyValidator"></a>

## emptyValidator(value) ⇒ <code>string</code>
**Kind**: global function  
**Returns**: <code>string</code> - error message or empty string  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | the input you are validating |

**Example**  
```js
const errorMessage = emptyValidator('foo') // 'This field must be empty.'
const valid = !errorMessage // false
```

* * *

<a name="isbn10Validator"></a>

## isbn10Validator(value) ⇒ <code>string</code>
**Kind**: global function  
**Returns**: <code>string</code> - error message or empty string  
**See**: [Wikipedia: ISBN-10 check digit calculation](https://en.wikipedia.org/wiki/International_Standard_Book_Number#ISBN-10_check_digit_calculation)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | the input you are validating |

**Example**  
```js
const errorMessage = isbn10Validator('123456789X') // ''
const valid = !errorMessage // true
```

* * *

<a name="isbn13Validator"></a>

## isbn13Validator(value) ⇒ <code>string</code>
**Kind**: global function  
**Returns**: <code>string</code> - error message or empty string  
**See**: [Wikipedia: ISBN-13 check digit calculation](https://en.wikipedia.org/wiki/International_Standard_Book_Number#ISBN-13_check_digit_calculation)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | the input you are validating |

**Example**  
```js
const errorMessage = isbn13Validator('9781234567897') // ''
const valid = !errorMessage // true
```

* * *

<a name="notEmptyValidator"></a>

## notEmptyValidator(value) ⇒ <code>string</code>
**Kind**: global function  
**Returns**: <code>string</code> - error message or empty string  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | the input you are validating |

**Example**  
```js
const errorMessage = notEmptyValidator('foo') // ''
const valid = !errorMessage // true
```

* * *

<a name="numberValidator"></a>

## numberValidator(value) ⇒ <code>string</code>
**Kind**: global function  
**Returns**: <code>string</code> - error message or empty string  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | the input you are validating |

**Example**  
```js
const errorMessage = numberValidator('23') // ''
const valid = !errorMessage // true
```

* * *

<a name="phoneValidator"></a>

## phoneValidator(value) ⇒ <code>string</code>
**Kind**: global function  
**Returns**: <code>string</code> - error message or empty string  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | the input you are validating |

**Example**  
```js
const errorMessage = phoneValidator('555-555-5555') // ''
const valid = !errorMessage // true
```

* * *

<a name="priceValidator"></a>

## priceValidator(value) ⇒ <code>string</code>
**Kind**: global function  
**Returns**: <code>string</code> - error message or empty string  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | the input you are validating |

**Example**  
```js
const errorMessage = priceValidator('19.99') // ''
const valid = !errorMessage // true
```

* * *

<a name="salesforceIdValidator"></a>

## salesforceIdValidator(value) ⇒ <code>string</code>
**Kind**: global function  
**Returns**: <code>string</code> - error message or emptry string  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | the input you are validating |

**Example**  
```js
const errorMessage = salesforceIdValidator('906F0000000BQGnIAO') // ''
const valid = !errorMessage // true
```

* * *

<a name="urlValidator"></a>

## urlValidator(value) ⇒ <code>string</code>
**Kind**: global function  
**Returns**: <code>string</code> - error message or empty string  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | the input you are validating |

**Example**  
```js
const errorMessage = urlValidator('https://github.com/duhdugg/preaction-validation') // ''
const valid = !errorMessage // true
```

* * *

