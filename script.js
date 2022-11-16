// get data
const nameInput = document.querySelector("#namn");
const email = document.querySelector("#email");
const message = document.querySelector("#meddelande");
const success = document.querySelector("#Skickat");
const errorNodes = document.querySelectorAll(".error");

// validate data
function validateForm() {
  clearMessages();
  let errorFlag = false;

  if (nameInput.value.length < 1) {
    errorNodes[0].innerText = "Skriv in ditt namn";
    nameInput.classList.add("error-border");
    errorFlag = true;
  }

  if (!emailIsValid(email.value)) {
    errorNodes[1].innerText = "Ogiltig emailadress";
    email.classList.add("error-border");
    errorFlag = true;
  }

  if (message.value.length < 1) {
    errorNodes[2].innerText = "Skriv ditt meddelande";
    message.classList.add("error-border");
    errorFlag = true;
  }

  if (!errorFlag) {
    success.innerText = "Skickat";
  }
}

// clear error / sucess message
function clearMessages() {
  for (let i = 0; i < errorNodes.length; i++) {
    errorNodes[i].innerText = "";
  }
  success.innerText = "";
  nameInput.classList.remove("error-border");
  email.classList.remove("error-border");
  message.classList.remove("error-border");
}

// check if email is valid
function emailIsValid(email) {
  let pattern = /\S+@\S+\.\S+/;
  return pattern.test(email);
}
