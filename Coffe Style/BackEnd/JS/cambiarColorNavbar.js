// Captura el elemento del navbar
const navbar = document.getElementById('navbar');

// Función para cambiar el color del navbar al hacer scroll
function cambiarColorNavbar() {
    if (window.scrollY > 500) { // Cambiar el valor 100 según tu preferencia
        navbar.classList.add('navbar-scroll'); // Agregar una clase al navbar
    } else {
        navbar.classList.remove('navbar-scroll'); // Quitar la clase del navbar
    }
}

// Agregar un event listener para detectar el scroll
window.addEventListener('scroll', cambiarColorNavbar);


