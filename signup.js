document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    // Simple validation (You can add more complex validation)
    if (newUsername && newPassword) {
        // Store the new user's credentials in localStorage (for demonstration purposes)
        localStorage.setItem('username', newUsername);
        localStorage.setItem('password', newPassword);

        document.getElementById('signupMessage').textContent = 'Signup successful!';
        document.getElementById('signupMessage').classList.add('success');
        
        // Optionally redirect to login page after successful signup
        setTimeout(() => {
            window.location.href = 'index.html'; // Redirect to login page
        }, 2000);
    } else {
        document.getElementById('signupMessage').textContent = 'Please enter a valid username and password.';
    }
});
