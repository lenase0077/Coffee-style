function guardar() {
    let n = document.getElementById("nombre").value
    let i = document.getElementById("imagen").value
    let p = document.getElementById("mensaje").value
    


    let producto = {
        nombre: n,
        imagen: i,
        mensaje: p
                
    }
    let url = "http://zole.pythonanywhere.com/productos"
    var options = {
        body: JSON.stringify(comentario),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    }
    fetch(url, options)
        .then(function () {
            console.log("creado")
            alert("Grabado")
            window.location.href = "./comunidad.html";  
            // Handle response we get from the API
        })
        .catch(err => {
            //this.errored = true
            alert("Error al grabar" )
            console.error(err);
        })
}

