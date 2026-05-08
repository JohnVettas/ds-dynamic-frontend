document.getElementById('loginForm').addEventListener('submit', async (e)=>{
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    try {
        const response = await fetch('http://localhost:8000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            // IMPORTANT: This tells the browser to accept the JWT cookie from port 8000
            credentials: 'include',
            body: JSON.stringify({
                username,
                password
            })
        });
        const result = await response.json();
        if (response.ok) // Redirect to the Backend Port where the protected /admin route lives
        window.location.href = 'http://localhost:8000/admin';
        else alert(result.message || "\u03A3\u03C6\u03AC\u03BB\u03BC\u03B1 \u03C3\u03CD\u03BD\u03B4\u03B5\u03C3\u03B7\u03C2");
    } catch (err) {
        console.error("Login error:", err);
        alert("Server error. Please try again later.");
    }
});
const password = document.getElementById('password');
const ShowPassword = document.getElementById('ShowPassword');
ShowPassword.addEventListener('click', ()=>{
    const type = password.type === 'password' ? 'text' : 'password';
    password.type = type;
    ShowPassword.classList.toggle('fa-eye');
    ShowPassword.classList.toggle('fa-eye-slash');
});

//# sourceMappingURL=login.472e66b8.js.map
