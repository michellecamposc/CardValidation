import validator from "./validator.js";

// Llamar al input desde html
function creditCardChanges() {
  const cardNumberInput = document.getElementById("card-number");
  console.log(cardNumberInput);
  cardNumberInput.addEventListener("input", verify);
}

// Verificar
function verify(event) {
  console.log(event);
  const value = event.srcElement.value;
  console.log(value);
  const isValid = validator.isValid(value);
  const messageHtml = document.getElementById("message");

  if (isValid) {
    messageHtml.style.color = "seagreen";
    messageHtml.innerText =
      "✅ Tarjeta de crédito válida " + validator.maskify(value);
  } else {
    messageHtml.style.color = "red";
    messageHtml.innerText = "❌ Tarjeta no válida";
  }
}

creditCardChanges();
