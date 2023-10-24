document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault();
    
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;
    
    // Aquí puedes utilizar los datos como desees, como enviarlos por correo electrónico o guardarlos en una base de datos.
    
    alert("¡Mensaje enviado con éxito!");
    
    document.getElementById("contactForm").reset();
  });