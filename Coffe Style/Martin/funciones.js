let intervalId; // Variable para almacenar el ID del temporizador

if (document.querySelector("#container-slider")) {
  startAutoSlide(); // Iniciar el desplazamiento automático al cargar la página
}

//------------------------------ LIST SLIDER -------------------------
const listSlider = document.querySelector(".listslider");
if (listSlider) {
  const links = listSlider.querySelectorAll("li a");
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const item = link.getAttribute("itlist");
      const [, side] = item.split("_");
      funcionEjecutar(side);
      clearInterval(intervalId); // Detener el temporizador al interactuar manualmente
      startAutoSlide(); // Reiniciar el desplazamiento automático
      return false;
    });
  });
}

function startAutoSlide() {
  intervalId = setInterval(() => {
    funcionEjecutar("siguiente");
  }, 20000);
}

function funcionEjecutar(side) {
  const parentTarget = document.getElementById("slider");
  const elements = parentTarget.getElementsByTagName("li");
  let curElement, siguienteElement;

  for (let i = 0; i < elements.length; i++) {
    if (elements[i].style.opacity == 1) {
      curElement = i;
      break;
    }
  }
  if (side == "anterior" || side == "siguiente") {
    if (side == "anterior") {
      siguienteElement = curElement === 0 ? elements.length - 1 : curElement - 1;
    } else {
      siguienteElement = curElement === elements.length - 1 ? 0 : curElement + 1;
    }
  } else {
    siguienteElement = side;
    side = curElement > siguienteElement ? "anterior" : "siguiente";
  }

  //PUNTOS INFERIORES
  const elementSel = document.querySelector(".listslider").querySelectorAll("a");
  elementSel[curElement].classList.remove("item-select-slid");
  elementSel[siguienteElement].classList.add("item-select-slid");
  elements[curElement].style.opacity = 0;
  elements[curElement].style.zIndex = 0;
  elements[siguienteElement].style.opacity = 1;
  elements[siguienteElement].style.zIndex = 1;
}