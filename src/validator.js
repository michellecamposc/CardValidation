const validator = {
  isValid: function (creditCardNumber) {
    //Invertir el orden del array y la operacion del algoritmo de Lunh
    let creditCardNumbersList = creditCardNumber
      .split("")
      .reverse()
      .map((x) => +x);

    const lastDigit = creditCardNumbersList.splice(0, 1)[0];
    let sum = creditCardNumbersList.reduce(
      (acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9),
      0
    );

    //Sumar los digitos para obtener el total

    sum += lastDigit;
    if (sum % 10 === 0) {
      return true;
    } else {
      return false;
    }
  },

  // Ocultar los caracteres excepto los ultimos 4 dígitos
  maskify: function (creditCardNumber) {
    let masked = "";
    for (let i = 0; i < creditCardNumber.length; i++) {
      if (i < creditCardNumber.length - 4) masked += "#";
      else masked += creditCardNumber[i];
    }
    return masked;
  },
};

export default validator;
