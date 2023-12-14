const { createApp } = Vue
createApp({
data() {
return {
comentarios:[],

url:'https://zole.pythonanywhere.com/comentarios', // si ya lo subieron a pythonanywhere
error:false,
cargando:true,
/*atributos para el guardar los valores del formulario */
id:0,
nombre:"",
imagen:"",
mensaje:"",
}
},
methods: {
fetchData(url) {
fetch(url)
.then(response => response.json())
.then(data => {
this.comentarios = data;
this.cargando=false
})
.catch(err => {
console.error(err);
this.error=true
})
},
eliminar(comentario) {
const url = this.url+'/' + comentario;
var options = {
method: 'DELETE',
}
fetch(url, options)
.then(res => res.text()) // or res.json()
.then(res => {
location.reload();
})
},
guardar(){
let comentario = {
usuario:this.usuario,
texto: this.texto,
imagen:this.imagen
}
var options = {
body:JSON.stringify(comentario),
method: 'POST',
headers: { 'Content-Type': 'application/json' },
redirect: 'follow'
}
fetch(this.url, options)
.then(function () {
alert("Registro grabado")
window.location.href = "./comunidad.html";
})
.catch(err => {
console.error(err);
alert("Error al Grabarr")
})
}
},
created() {
this.fetchData(this.url)
},
}).mount('#app')