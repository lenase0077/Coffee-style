function validarLogin() {
    var usuario = document.getElementById("loginUser").value;
    var contrasena = document.getElementById("loginPassword").value;

    if (usuario === "admin" && contrasena === "admin") {
      window.location.href = "productos.html";
    } else {
      alert("Datos incorrectos. Si cree que es un error, comuníquese con el administrador");
    }
  }


  