const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  console.log("HICE CLICK EN EL BOTON"); // LE AGREGUE ESTO PARA VER QUE PASABA AL HACER CLICK
  navLinks.classList.toggle("show");
});

