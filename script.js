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
    
