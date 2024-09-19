document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault();

    const formData = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
    };

    fetch("https://hostel-pg-backend.onrender.com/userlogin", {
        method: "POST",
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
        document.getElementById("responseMessage").textContent = "Login successfully!";
        document.getElementById("responseMessage").style.color = "green";
        
        console.log("Success:", data);
    
        window.location.href = "https://hostelpg.netlify.app/success";
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
