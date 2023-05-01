// Select form inputs
const nameInput = document.getElementById("nombre");
const lastNameInput = document.getElementById("primerapellido");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

// Select form and buttons
const form = document.querySelector("form");
const cancelButton = document.querySelector("button[type=reset]");
const submitButton = document.querySelector("button[type=button]");

// Define validation functions
const namePattern = /^[a-zA-Z ]{2,}$/;
const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;

function validateName() {
  const nameValue = nameInput.value.trim();
  if (!nameValue) {
    displayError("Please enter your name.");
    return false;
  }
  if (!namePattern.test(nameValue)) {
    displayError("Name should contain only letters and be at least 2 characters long.");
    return false;
  }
  return true;
}

function validateLastName() {
  const lastNameValue = lastNameInput.value.trim();
  if (!lastNameValue) {
    displayError("Please enter your last name.");
    return false;
  }
  if (!namePattern.test(lastNameValue)) {
    displayError("Last name should contain only letters and be at least 2 characters long.");
    return false;
  }
  return true;
}

function validateEmail() {
  const emailValue = emailInput.value.trim();
  if (!emailValue) {
    displayError("Please enter your email.");
    return false;
  }
  if (!emailPattern.test(emailValue)) {
    displayError("Please enter a valid email address.");
    return false;
  }
  return true;
}

function validatePassword() {
  const passwordValue = passwordInput.value.trim();
  if (!passwordValue) {
    displayError("Please enter a password.");
    return false;
  }
  if (!passwordPattern.test(passwordValue)) {
    displayError("Password should contain at least 8 characters, including an uppercase letter, a lowercase letter, a number, and a special character (!@#$%^&*()_+).");
    return false;
  }
  return true;
}

function displayError(errorMessage) {
  const errorDiv = document.createElement("div");
  errorDiv.className = "alert alert-danger mt-3";
  errorDiv.innerText = errorMessage;
  form.insertBefore(errorDiv, submitButton);
}

function displaySuccess() {
  const successDiv = document.createElement("div");
  successDiv.className = "alert alert-success mt-3";
  successDiv.innerText = "Form submitted successfully.";
  form.insertBefore(successDiv, submitButton);
}

// Add event listeners to inputs and buttons
nameInput.addEventListener("blur", validateName);
lastNameInput.addEventListener("blur", validateLastName);
emailInput.addEventListener("blur", validateEmail);
passwordInput.addEventListener("blur", validatePassword);

cancelButton.addEventListener("click", function() {
  form.reset();
});

submitButton.addEventListener("click", function() {
  // Check if all fields are valid
  const isNameValid = validateName();
  const isLastNameValid = validateLastName();
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();
  
  // If all fields are valid, submit form
  if (isNameValid && isLastNameValid && isEmailValid && isPasswordValid) {
    form.reset();
    displaySuccess();
  }
});
