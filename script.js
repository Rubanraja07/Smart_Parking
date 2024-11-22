

function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
}

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const userId = document.getElementById("user-id").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    const passwordPattern = /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,16}$/;

    if (userId && passwordPattern.test(password)) {
        errorMessage.style.display = "none"; 
        document.getElementById("login-page").style.display = "none";
        document.getElementById("main-site").style.display = "block";
    } else if (!userId || password.length < 8 || password.length > 16) {
        errorMessage.textContent = "Password must be between 8 to 16 characters.";
        errorMessage.style.display = "block";
    } else {
        errorMessage.textContent = "Invalid password. Ensure it contains at least one special character.";
        errorMessage.style.display = "block";
    }
});
