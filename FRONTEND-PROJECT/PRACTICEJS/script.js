document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    try {
        let fullName = document.getElementById("fullName").value.trim();
        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();
        let confirmPassword = document.getElementById("confirmPassword").value.trim();
        let dob = document.getElementById("dob").value;
        let gender = document.querySelector('input[name="gender"]:checked');
        let profilePic = document.getElementById("profilePic").files[0];

        // Error elements
        let nameError = document.getElementById("nameError");
        let emailError = document.getElementById("emailError");
        let passwordError = document.getElementById("passwordError");
        let confirmPasswordError = document.getElementById("confirmPasswordError");
        let dobError = document.getElementById("dobError");
        let genderError = document.getElementById("genderError");
        let profilePicError = document.getElementById("profilePicError");

        // Clear previous errors
        nameError.textContent = emailError.textContent = passwordError.textContent = "";
        confirmPasswordError.textContent = dobError.textContent = genderError.textContent = profilePicError.textContent = "";

        let isValid = true;

        // Full Name validation
        if (!/^[a-zA-Z\s]{3,}$/.test(fullName)) {
            nameError.textContent = "Full name must contain only letters and spaces (min 3 characters).";
            isValid = false;
        }

        // Email validation
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            emailError.textContent = "Enter a valid email.";
            isValid = false;
        }

        // Password validation
        if (!/^(?=.*[0-9])(?=.*[\W_]).{8,}$/.test(password)) {
            passwordError.textContent = "Password must be at least 8 characters with a number and special character.";
            isValid = false;
        }

        if (password !== confirmPassword) {
            confirmPasswordError.textContent = "Passwords do not match.";
            isValid = false;
        }

        // DOB validation (18+ years)
        let birthDate = new Date(dob);
        let age = new Date().getFullYear() - birthDate.getFullYear();
        if (age < 18) {
            dobError.textContent = "You must be at least 18 years old.";
            isValid = false;
        }

        // Gender validation
        if (!gender) {
            genderError.textContent = "Please select a gender.";
            isValid = false;
        }

        // Profile picture validation
        if (profilePic && (!/\.(jpg|png)$/i.test(profilePic.name) || profilePic.size > 2097152)) {
            profilePicError.textContent = "Only .jpg/.png under 2MB allowed.";
            isValid = false;
        }

        if (isValid) {
            let userData = {
                fullName,
                email,
                dob,
                gender: gender.value,
                profilePicture: profilePic ? profilePic.name : ""
            };

            localStorage.setItem("userProfile", JSON.stringify(userData));
            document.getElementById("displayFullName").textContent = fullName;
            document.getElementById("displayEmail").textContent = email;
            document.getElementById("displayDob").textContent = dob;
            document.getElementById("displayGender").textContent = gender.value;
            document.getElementById("displayProfilePic").src = URL.createObjectURL(profilePic);
            document.getElementById("userProfile").classList.remove("hidden");
            console.log("User Data:", JSON.stringify(userData, null, 2));
        }
    } catch (error) {
        console.error("An unexpected error occurred:", error);
    }
});
