const form = document.querySelector("form");

const nameInput = document.getElementById("nombre");
const lastNameInput = document.getElementById("apellido");
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
  const iconEl = inputGroup.querySelector(".form-control-icon");

  if (isValid) {
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    feedbackEl.textContent = "";
    validFeedbackEl.style.display = "block";
    iconEl.classList.remove("fa-times-circle");
    iconEl.classList.add("fa-check-circle", "text-success");
  } else {
    input.classList.add("is-invalid");
    input.classList.remove("is-valid");
    feedbackEl.textContent = "Invalid input";
    validFeedbackEl.style.display = "none";
    iconEl.classList.remove("fa-check-circle");
    iconEl.classList.add("fa-times-circle", "text-danger");
  }
}

function validateForm(event) {
  event.preventDefault();
  validateInput(nameInput, nameRegex);
  validateInput(lastNameInput, nameRegex);
  validateInput(emailInput, emailRegex);
  validateInput(passwordInput, passwordRegex);

  const invalidInputs = form.querySelectorAll(".is-invalid");
  if (invalidInputs.length === 0) {
    const successMessage = document.createElement("div");
    successMessage.classList.add("alert", "alert-success");
    successMessage.textContent = "All requirements met";
    form.appendChild(successMessage);
  }
}

form.addEventListener("submit", validateForm);
