let signupBtn = document.getElementById("signup-btn");
let usernameTextbox = document.querySelector("#username-input-signup");
let emailTextbox = document.querySelector("#email-input-signup");
let passwordTextbox = document.querySelector("#password-input-signup");
let loginbtn = document.querySelector("#login-btn");
let hasWarning = false; 

const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document
    .querySelector("#username-input-signup")
    .value.trim();
  const email = document.querySelector("#email-input-signup").value.trim();
  const password = document
    .querySelector("#password-input-signup")
    .value.trim();

  if (username && email && password) {
    const response = await fetch("/api/users/signup", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/login");
    } else {
      console.error("Error: Incorrect email or password, please try again");
    }
  }
};

signupBtn.addEventListener("click", function () {
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
  document.querySelector("#signup-form");
  document.addEventListener("submit", signupFormHandler);
});
