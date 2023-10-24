let usernameTextbox = document.querySelector("#username-input-login");
let emailTextbox = document.querySelector("#email-input-login");
let passwordTextbox = document.querySelector("#password-input-login");
let loginbtn = document.querySelector("#login-btn");
let hasWarning = false;

const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const username = document.querySelector("#username-input-login").value.trim();
  const email = document.querySelector("#email-input-login").value.trim();
  const password = document.querySelector("#password-input-login").value.trim();

  if (username && email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace("/profile");
    } else {
          console.error("Error: Incorrect email or password, please try again");
    }
  }
};

loginbtn.addEventListener("click", function () {
  if (
    usernameTextbox.value === "" ||
    emailTextbox.value === "" ||
    passwordTextbox.value === ""
  ) {
    if (!hasWarning) {
      let warning = document.createElement("p");
      warning.setAttribute("id", "warning");
      warning.innerHTML = "All fields are required";
      warning.style.marginTop = "250px";

      let container = document.createElement("div");
      container.appendChild(warning);

      document.body.appendChild(container);
      hasWarning = true;
    }
  } else {
    window.location.href = "/login";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#login-form");
  document.addEventListener("submit", loginFormHandler);
});
