document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault();

    const formData = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
    };

    fetch("http://localhost:8081/register/forget/", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error("Invalid Email & Password");
        }
        return response.text().then(text => {
            try{
                return JSON.parse(text);
            }catch{
                return text;
            }
        });
    })
    .then((data) => {
        document.getElementById("responseMessage").textContent = "Password CreateSuccessfully!";
        document.getElementById("responseMessage").style.color = "green";
        
        console.log("Success:", data);
    
    })
    .catch((error) => {
        document.getElementById("responseMessage").textContent = "Invalid Credentials, Check Email and Password";
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
