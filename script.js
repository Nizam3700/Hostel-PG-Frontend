document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Collect the form data
    const formData = {
      first_Name: document.getElementById("first_Name").value,
      last_Name: document.getElementById("last_Name").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
      role: document.getElementById("role").value,
    };
  
    // Make a POST request to your backend
    fetch("https://hostel-pg-backend.onrender.com/userregister", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to register user.");
      }
      return response.json();
    })
    .then((data) => {
      document.getElementById("responseMessage").textContent = "User registered successfully!";
      document.getElementById("responseMessage").style.color = "green";
      
      console.log("Success:", data);

      window.location.href = "https://hostelpg.netlify.app/login";
    })
    .catch((error) => {
      document.getElementById("responseMessage").textContent = "Error registering user.";
      document.getElementById("responseMessage").style.color = "red";
      console.error("Error:", error);
    });
    
  });

  document.getElementById('togglePassword').addEventListener('change', function () {
    const passwordInput = document.getElementById('password');
    if (this.checked) {
        passwordInput.type = 'text';  // Show password
    } else {
        passwordInput.type = 'password';  // Hide password
    }
});

  