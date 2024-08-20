document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const validUsername = 'user';
    const validPassword = 'password';

    if (username === validUsername && password === validPassword) {
        window.location.href = "/LandingPage/landing.html";
    } else {
        document.getElementById('errorMessage').textContent = 'Invalid username or password';
        document.getElementById('errorMessage').style.display = 'block';
    }

});