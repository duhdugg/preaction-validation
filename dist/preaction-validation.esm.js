const baseValidator = () => {
  return ''
};

const dateValidator = (value) => {
  let message = baseValidator();
  if (value) {
    const regex = new RegExp(/^\d{4}-\d\d-\d\d$/);
    if (!regex.test(value)) {
      message = 'Enter a valid date.';
    } else {
      const d = new Date(value);
      if (d.toTimeString() === 'Invalid Date') {
        message = 'Enter a valid date.';
      }
    }
  }
  return message
};

const emailValidator = (value) => {
  let message = baseValidator();
  if (value) {
    const expression = /^([a-zA-Z0-9_\-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/gi;
    const regex = new RegExp(expression);
    if (value.search(regex) < 0) {
      message = 'Enter a valid email.';
    }
  }
  return message
};

const emptyValidator = (value) => {
  let message = baseValidator();
  const errorMessage = 'This field must be empty.';
  if (value !== undefined && value !== null && typeof value === 'string') {
    if (value.search(/^\s*$/g) < 0) {
      message = errorMessage;
    }
  }
  return message
};

// https://en.wikipedia.org/wiki/International_Standard_Book_Number#ISBN-10_check_digit_calculation

const isbn10Validator = (value) => {
  let message = baseValidator();
  const errorMessage = 'Enter a valid 10-digit ISBN.';
  if (value) {
    const isbn = value.replace(/\W/g, '');
    if (isbn.search(/^\d{9}[\d|x|X]$/g) < 0) {
      message = errorMessage;
    } else if (isbn.search(/^978/g) > -1) {
      message = errorMessage;
    } else {
      let x = 0;
      for (let d = 0; d < 10; d++) {
        const digit = isbn[d].toUpperCase() === 'X' ? 10 : Number(isbn[d]);
        x += (10 - d) * digit;
      }
      if (x % 11 !== 0) {
        message = errorMessage;
      }
    }
  }
  return message
};

// https://en.wikipedia.org/wiki/International_Standard_Book_Number#ISBN-13_check_digit_calculation

const isbn13Validator = (value) => {
  let message = baseValidator();
  const errorMessage = 'Enter a valid 13-digit ISBN.';
  if (value) {
    const isbn = value.replace(/\W/g, '');
    if (isbn.search(/^978\d{10}$/g) < 0) {
      message = errorMessage;
    } else {
      let total = 0;
      for (let d = 0; d < isbn.length - 1; d++) {
        let multiplier = 1;
        if (d % 2) {
          multiplier = 3;
        }
        total += Number(isbn[d]) * multiplier;
      }
      let check = 10 - (total % 10);
      if (check === 10) {
        check = 0;
      }
      if (check !== Number(isbn[isbn.length - 1])) {
        message = errorMessage;
      }
    }
  }
  return message
};

const notEmptyValidator = (value) => {
  let message = baseValidator();
  if (!emptyValidator(value)) {
    message = 'This field is required.';
  }
  return message
};

const numberValidator = (value) => {
  let message = baseValidator();
  if (value) {
    if (typeof value === 'string') {
      if (value.search(/^-?[0-9]+([.][0-9]+)?$/g) < 0) {
        message = 'Enter a valid number.';
      }
    }
  } else if (value !== undefined && isNaN(value)) {
    message = 'Enter a valid number.';
  }
  return message
};

const phoneValidator = (value) => {
  let message = baseValidator();
  const errorMessage = 'Enter a valid phone number.';
  if (value) {
    if (
      value.search(
        /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/gi
      ) < 0
    ) {
      message = errorMessage;
    }
  }
  return message
};

const priceValidator = (value) => {
  let message = baseValidator();
  const errorMessage = 'Enter a valid price.';
  if (value) {
    if (typeof value === 'string') {
      if (value.search(/^(\d*|\d*\.\d\d)$/g) < 0) {
        message = errorMessage;
      }
    } else {
      if (typeof value !== 'number') {
        message = errorMessage;
      }
    }
  }
  return message
};

const salesforceIdValidator = (value) => {
  let message = baseValidator();
  const errorMessage = 'Enter a valid Salesforce ID.';
  if (value) {
    const salesforceid = value.replace(/A-z\w/g, '');
    if (salesforceid.search(/^[a-zA-Z0-9]{18}$|^[a-zA-Z0-9]{15}$/g) < 0) {
      message = errorMessage;
    }
  }
  return message
};

const urlValidator = (value) => {
  let message = baseValidator();
  const errorMessage = 'Enter a valid URL.';
  const expression = /[-a-zA-Z0-9@:%_+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_+.~#?&//=]*)?/gi;
  const regex = new RegExp(expression);
  if (value) {
    if (value.search(regex) < 0) {
      message = errorMessage;
    }
  }
  return message
};

export { baseValidator, dateValidator, emailValidator, emptyValidator, isbn10Validator, isbn13Validator, notEmptyValidator, numberValidator, phoneValidator, priceValidator, salesforceIdValidator, urlValidator };
