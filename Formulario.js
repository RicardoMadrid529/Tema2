document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('Contactar').addEventListener('submit', function(event) {
        const nombre = document.querySelector('input[name="nombre"]').value;
        const email = document.querySelector('input[name="email"]').value;
        const descripcion = document.querySelector('input[name="descripcion"]').value;

        if (nombre === '' || email === '' || descripcion === '') {
            alert('Por favor completa todos los campos.');
            event.preventDefault();
        } else {
            alert('Registro exitoso, Te contactaremos muy pronto');
        }
    });
});