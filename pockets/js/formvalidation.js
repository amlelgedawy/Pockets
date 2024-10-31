// Show the modal popup
function showPopup() {
  document.getElementById("modal").style.display = "flex";
}

// Close the modal popup
function closePopup() {
  document.getElementById("modal").style.display = "none";
}

// Toggle between login and signup forms
function toggleForms() {
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");
  loginForm.style.display =
    loginForm.style.display === "none" ? "block" : "none";
  signupForm.style.display =
    signupForm.style.display === "none" ? "block" : "none";
}

// Signup validation and storage
function signup() {
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;
  const confirmPassword = document.getElementById(
    "signupConfirmPassword"
  ).value;

  const emailError = document.getElementById("signupEmailError");
  const passwordError = document.getElementById("signupPasswordError");
  const confirmPasswordError = document.getElementById(
    "signupConfirmPasswordError"
  );
  //   by default hidden
  emailError.style.visibility =
    passwordError.style.visibility =
    confirmPasswordError.style.visibility =
      "hidden";

  if (!email.includes("@")) {
    emailError.textContent = "Please enter a valid email.";
    emailError.style.visibility = "visible";
    return;
  }

  if (password.length < 6) {
    passwordError.textContent = "Password should be at least 6 characters.";
    passwordError.style.visibility = "visible";
    return;
  }

  if (password !== confirmPassword) {
    confirmPasswordError.textContent = "Passwords do not match.";
    confirmPasswordError.style.visibility = "visible";
    return;
  }

  localStorage.setItem("userEmail", email);
  localStorage.setItem("userPassword", password);

  alert("Account created successfully!");
  toggleForms(); // Switch to login form
}

// Login validation
function login() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const emailError = document.getElementById("loginEmailError");
  const passwordError = document.getElementById("loginPasswordError");

  emailError.style.visibility = passwordError.style.visibility = "hidden";

  const storedEmail = localStorage.getItem("userEmail");
  const storedPassword = localStorage.getItem("userPassword");

  if (email !== storedEmail) {
    emailError.textContent = "Email not found. Please sign up.";
    emailError.style.visibility = "visible";
    return;
  }

  if (password !== storedPassword) {
    passwordError.textContent = "Incorrect password.";
    passwordError.style.visibility = "visible";
    return;
  }

  alert("Logged in successfully!");
  closePopup();
}
