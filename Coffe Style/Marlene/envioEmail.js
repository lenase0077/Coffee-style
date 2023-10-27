document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault(); 
    
    
    var nombre = document.getElementById('nombre').value;
    var correo = document.getElementById('correo').value;
    var telefono = document.getElementById('telefono').value;
    var consulta = document.getElementById('consulta').value;


    fetch('/enviar-correo', {
        method: 'POST',
        action: "https://formsubmit.co/solemba_Scs@hotmail.com",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nombre, correo, telefono,consulta })
    })
    .then(response => {
        if (response.status === 200) {
            alert('Correo enviado con éxito!');
        } else {
            alert('Error al enviar el correo');
        }
    });
});
