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
    feedbackEl.textContent = "";
    validFeedbackEl.style.display = "block";
  } else {
    input.classList.add("is-invalid");
    input.classList.remove("is-valid");
    feedbackEl.textContent = "Invalid input";
    if (input === passwordInput) {
      feedbackEl.textContent = "Must be at least 8 characters, a combination of lowercase, uppercase, numbers and special characters";
    }
    validFeedbackEl.style.display = "none";
  }
}

nameInput.addEventListener("input", function () {
  validateInput(nameInput, nameRegex);
});

lastNameInput.addEventListener("input", function () {
  validateInput(lastNameInput, nameRegex);
});

emailInput.addEventListener("input", function () {
  validateInput(emailInput, emailRegex);
});

passwordInput.addEventListener("input", function () {
  validateInput(passwordInput, passwordRegex);
});

form.addEventListener("submit", validateForm);
