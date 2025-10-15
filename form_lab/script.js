document.getElementById("registrationForm").addEventListener("submit", function(event) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Name not be empty
    if (name === "") {
        alert("Please enter your name.");
        event.preventDefault();
        return;
    }

    // EValid email format
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        event.preventDefault();
        return;
    }

    // Password must be at least 8 characters
    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        event.preventDefault();
        return;
    }

    // Password confirmation match
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        event.preventDefault();
        return;
    }
});
