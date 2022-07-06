const validator = {
  isValid: function (creditCardNumber) {
    const creditCardNumbersList = creditCardNumber
      .split("")
      .reverse()
      .map((x) => +x);

    const lastDigit = creditCardNumbersList.splice(0, 1)[0];
    let sum = creditCardNumbersList.reduce(
      (acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9),
      0
    );
    sum += lastDigit;
    return sum % 10 === 0 ? true : false;
  },

  /**
   * Returns all the characters except the last four, whose are replaced by a cat emoji (🐱)
   * Should always keep the last four characters, even when the creditCardNumber param is shorter
   */
  maskify: function (creditCardNumber) {
    let masked = "";
    for (let i = 0; i < creditCardNumber.length; i++) {
      if (i < creditCardNumber.length - 4) masked += "🐱";
      else masked += creditCardNumber[i];
    }

    return masked;
  },
};

export default validator;

/**
 * console.log(validator.isValid("5181975718047403")); // === true
 * console.log(validator.maskify("5181975718047403")); // === '🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱7403'
 * console.log(validator.maskify("75718047403")); // === '🐱🐱🐱🐱🐱🐱🐱7403'
 * console.log(validator.maskify("3")); // === '3'
 * console.log(validator.maskify("")); // === ''
 */
