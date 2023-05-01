const form = document.querySelector("form");

const nameInput = document.getElementById("nombre");
const lastNameInput = document.getElementById("primerapellido");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameRegex = /^[a-zA-Z ]{2,}$/;
const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;

function validateInput(input, regex) {
  const isValid = regex.test(input.value.trim());
  const inputGroup = input.closest(".form-group");
  const feedbackEl = inputGroup.querySelector(".invalid-feedback");
  const validFeedbackEl = inputGroup.querySelector(".valid-feedback");

  if (isValid) {
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    feedbackEl.textContent = "Looks good!";
    validFeedbackEl.style.display = "block";
  } else {
    input.classList.add("is-invalid");
    input.classList.remove("is-valid");
    feedbackEl.textContent = "Invalid input";
    validFeedbackEl.style.display = "none";
  }
}

function validateForm(event) {
  event.preventDefault();
  validateInput(nameInput, nameRegex);
  validateInput(lastNameInput, nameRegex);
  validateInput(emailInput, emailRegex);
  validateInput(passwordInput, passwordRegex);
}

form.addEventListener("submit", validateForm);