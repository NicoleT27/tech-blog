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
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};

    document.addEventListener("DOMContentLoaded", function () {
      document.querySelector("#login-form");
      document.addEventListener("submit", loginFormHandler);
    });

