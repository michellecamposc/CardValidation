import validator from "./validator.js";

// Llamar al input desde html y validar tarjeta
function verifyCard() {
  const creditCardNumber = document.getElementById("card-number").value;
  //Si la tarjeta tiene menos de 16 caracteres
  if (creditCardNumber.length < 16) {
    alert("Faltan números de la tarjeta");
    //Si la tarjeta es válida
  } else if (validator.isValid(creditCardNumber) === true) {
    alert("Tarjeta de crédito válida✅");
    //Si la tarjeta es inválida
  } else validator.isValid(creditCardNumber) === false;
  alert("Tarjeta de crédito inválida❌");
}

const buttonValidation = document.getElementById("button-validation");
buttonValidation.addEventListener("click", verifyCard);
