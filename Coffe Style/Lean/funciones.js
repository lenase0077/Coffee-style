// Verifica la existencia del contenedor del slider
if (document.querySelector('#container-slider')) {
  // Establece un intervalo para avanzar automáticamente el slider
  setInterval(function () {
    funcionEjecutar('siguiente');
  }, 15000);
}

// Verifica la existencia de elementos con la clase 'listslider'
if (document.querySelector('.listslider')) {
  // Obtiene todos los enlaces dentro de elementos de lista
  const links = document.querySelectorAll('.listslider li a');
  
  // Adjunta manejadores de eventos 'click' a los enlaces
  links.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault(); // Corrige el error tipográfico "anteriorentDefault"
      const item = this.getAttribute('itlist');
      const arrItem = item.split('_');
      funcionEjecutar(arrItem[1]);
      return false;
    });
  });
}

// Función para controlar el slider
function funcionEjecutar(side) {
  const parentTarget = document.getElementById('slider');
  const elements = parentTarget.getElementsByTagName('li');
  let curElement, siguienteElement;

  // Encuentra el elemento actual
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].style.opacity === '1') {
      curElement = i;
      break;
    }
  }

  // Determina el siguiente elemento según la dirección ('anterior', 'siguiente' o un número)
  if (side === 'anterior' || side === 'siguiente') {
    siguienteElement = (side === 'anterior') ? (curElement === 0 ? elements.length - 1 : curElement - 1) : (curElement === elements.length - 1 ? 0 : curElement + 1);
  } else {
    siguienteElement = side;
    side = (curElement > siguienteElement) ? 'anterior' : 'siguiente';
  }

  // Actualiza la lista de puntos inferiores
  const elementSel = document.querySelector('.listslider').getElementsByTagName('a');
  elementSel[curElement].classList.remove('item-select-slid');
  elementSel[siguienteElement].classList.add('item-select-slid');

  // Actualiza la visibilidad y el orden Z de los elementos del slider
  elements[curElement].style.opacity = 0;
  elements[curElement].style.zIndex = 0;
  elements[siguienteElement].style.opacity = 1;
  elements[siguienteElement].style.zIndex = 1;
}
