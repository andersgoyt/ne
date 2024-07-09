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

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Get stored credentials from localStorage (for demonstration purposes)
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        // Redirect to another page or show a success message
        window.location.href = 'welcome.html'; // Replace with your actual page
    } else {
        document.getElementById('errorMessage').textContent = 'Invalid username or password';
    }
});
