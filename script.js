document.addEventListener('DOMContentLoaded', function() {
    // Handle signup form submission
    if (document.getElementById('signupForm')) {
        document.getElementById('signupForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission

            const newUsername = document.getElementById('newUsername').value;
            const newPassword = document.getElementById('newPassword').value;
            const joinDate = new Date().toISOString(); // Get current date

            // Save new credentials and join date to localStorage (for demonstration purposes)
            localStorage.setItem('username', newUsername);
            localStorage.setItem('password', newPassword);
            localStorage.setItem('joinDate', joinDate);

            // Display a success message
            document.getElementById('signupErrorMessage').textContent = 'Sign-up successful! Redirecting to login...';

            // Redirect to login page after a 2-second delay
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 2000);
        });
    }

    // Handle login form submission
    if (document.getElementById('loginForm')) {
        document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Get stored credentials from localStorage
            const storedUsername = localStorage.getItem('username');
            const storedPassword = localStorage.getItem('password');

            if (username === storedUsername && password === storedPassword) {
                // Redirect to welcome page
                window.location.href = 'welcome.html';
            } else {
                document.getElementById('errorMessage').textContent = 'Invalid username or password';
            }
        });
    }

    // Display user profile if on profile page
    if (document.getElementById('profileContainer')) {
        const storedUsername = localStorage.getItem('username');
        const joinDate = localStorage.getItem('joinDate');

        if (storedUsername && joinDate) {
            document.getElementById('profileUsername').textContent = storedUsername;
            document.getElementById('profileJoinDate').textContent = new Date(joinDate).toLocaleString();
        }
    }
});
