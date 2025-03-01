document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    let isValid = true;

    
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        document.getElementById("email-error").innerText = "Invalid email format";
        isValid = false;
    } else {
        document.getElementById("email-error").innerText = "";
    }

    
    if (password.length < 6) {
        document.getElementById("password-error").innerText = "Password must be at least 6 characters";
        isValid = false;
    } else if (!/[A-Z]/.test(password)) {
        document.getElementById("password-error").innerText = "Password must contain at least one uppercase letter";
        isValid = false;
    } else if (!/[a-z]/.test(password)) {
        document.getElementById("password-error").innerText = "Password must contain at least one lowercase letter";
        isValid = false;
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        document.getElementById("password-error").innerText = "Password must contain at least one special character";
        isValid = false;
    } else {
        document.getElementById("password-error").innerText = "";
    }

    if (isValid) {
        window.location.href = "product.html";
    }
});
