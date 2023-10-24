const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#username-input-signup").value.trim();
  const email = document.querySelector("#email-input-signup").value.trim();
  const password = document.querySelector("#password-input-signup").value.trim();

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


  document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".signup-form")
      document.addEventListener("submit", signupFormHandler);
  });
