const getSendButton = document.getElementById("send-button");
const getResetButton = document.getElementById("reset-button");
const getImageCheckbox = document.getElementById("checkbox-imagens");

// getSendButton.addEventListener("click", (event) => {
//   event.preventDefault();
// });

const preventSendingByCheckboxImage = () => {
  getSendButton.addEventListener("click", (event) => {
    if (!getImageCheckbox.checked) {
      event.preventDefault();
      alert(
        "Não estamos aceitando inscrições sem concordar que as imagens sejam divulgadas!"
      );
    }
    alert(
      "Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip."
    );
  });
};

preventSendingByCheckboxImage();

function clearFields() {
  const formElements = document.querySelectorAll("input");
  const textArea = document.querySelector("textarea");
  for (let index = 0; index < formElements.length; index += 1) {
    const userInput = formElements[index];
    userInput.value = "";
    userInput.checked = false;
  }
  textArea.value = "";
}

function enableSubmit() {
  const submitBtn = document.querySelector("#submit-btn");
  const agreement = document.querySelector("#agreement");
  submitBtn.disabled = !agreement.checked;
}

window.onload = function () {
  const clearBtn = document.querySelector("#clear-btn");
  clearBtn.addEventListener("click", clearFields);
  const submitBtn = document.querySelector("#submit-btn");
  submitBtn.addEventListener("click", handleSubmit);
  const agreement = document.querySelector("#agreement");
  agreement.addEventListener("change", enableSubmit);
};

function textInputValidation() {
  const email = document.querySelector("#email").value.length;
  const invalidEmail = email < 10 || email > 50;

  const name = document.querySelector("#fullName").value.length;
  const invalidName = name < 10 || name > 40;

  const reason = document.querySelector("#why").value.length;
  const invalidReason = reason > 500;

  if (invalidEmail || invalidName || invalidReason) {
    return false;
  } else {
    return true;
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const validation = textInputValidation();
  if (validation === false) {
    alert("Dados inválidos");
  } else {
    alert(
      "Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip."
    );
  }
}
