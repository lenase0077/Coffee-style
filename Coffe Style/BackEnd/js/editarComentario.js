console.log(location.search)     // lee los argumentos pasados a este formulario
var args = location.search.substr(1).split('&');  
//separa el string por los “&” creando una lista [“id=3” , “nombre=’tv50’” , ”mensaje=1200”,”stock=20”]
console.log(args)
var parts = []
for (let i = 0; i < args.length; ++i) {
    parts[i] = args[i].split('=');
}
//decodeUriComponent elimina los caracteres especiales que recibe en la URL 
document.getElementById("id").value = decodeURIComponent(parts[0][1])
document.getElementById("nombre").value = decodeURIComponent(parts[1][1])
document.getElementById("imagen").value =decodeURIComponent( parts[2][1])
document.getElementById("mensaje").value = decodeURIComponent(parts[3][1])



function modificar() {
    let id = document.getElementById("id").value
    let n = document.getElementById("nombre").value
    let i = document.getElementById("imagen").value
    let p = document.getElementById("mensaje").value
    
   
    let producto = {
        nombre: n,
        imagen:i,
        mensaje: p
       
        
    }
    let url = "http://4li3ntr3x.pythonanywhere.com/productos/"+id
    var options = {
        body: JSON.stringify(comentario),
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            console.log("modificado")
            alert("Registro modificado")
            window.location.href = "./comunidad.html";  
        //NUEVO,  si les da error el fetch  comentar esta linea que puede dar error  
        })
        .catch(err => {
            //this.errored = true
            console.error(err);
            alert("Error al Modificar")
        })      
}
