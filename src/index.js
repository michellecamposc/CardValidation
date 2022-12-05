import validator from "./validator.js";

// Llamar al input desde html y validar tarjeta
function verifyCard() {
  const creditCardNumber = document.getElementById("card-number").value;
  //Si la tarjeta tiene menos de 16 caracteres
  if (creditCardNumber.length < 16) {
    MaskedCC();
    alert("Faltan números de la tarjeta" + validator.maskify(creditCardNumber));
    //Si la tarjeta es válida
  } else if (validator.isValid(creditCardNumber) === true) {
    MaskedCC();
    alert("Tarjeta de crédito válida✅" + validator.maskify(creditCardNumber));
    //Si la tarjeta es inválida
  } else if (validator.isValid(creditCardNumber) === false) {
    MaskedCC();
    alert(
      "Tarjeta de crédito inválida❌" + validator.maskify(creditCardNumber)
    )
  }
}

//Enmascarar la tarjeta
function MaskedCC() {
  const maskedNumber = document.getElementById("card-number").value;
  const maskedResult = validator.maskify(maskedNumber);
  //console.log(maskedResult);
}

//Botón validar
const buttonValidation = document.getElementById("button-validation");
buttonValidation.addEventListener("click", verifyCard);

//Solo acepta valores numéricos

function justNumber(event) {
  if (event.charCode >= 48 && event.charCode <= 57) {
    return true;
  }
  return false;
}
justNumber