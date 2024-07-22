document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const contrasena = document.getElementById('contrasena').value;

    if (nombre === 'admin' && contrasena === 'admin') {
        alert('Login exitoso');
    } else {
        alert('Nombre o contraseña incorrectos');
    }
});