document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault();
    
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;
    
   
    
    alert("¡Mensaje enviado con éxito!");
    
    document.getElementById("contactForm").reset();
  });