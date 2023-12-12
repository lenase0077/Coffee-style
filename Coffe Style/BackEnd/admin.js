const mostrar = document.getElementById('mostrar');
const ocultar = document.getElementById('ocultar');

mostrar.addEventListener('click', () => {
    const divsOcultos = document.querySelectorAll('.ocultar');
    divsOcultos.forEach(div => div.style.display = 'block');
    mostrar.style.display = 'none';
    ocultar.style.display = 'block';
});

ocultar.addEventListener('click', () => {
    const divsOcultos = document.querySelectorAll('.ocultar');
    divsOcultos.forEach(div => div.style.display = 'none');
    mostrar.style.display = 'block';
    ocultar.style.display = 'none';
});
