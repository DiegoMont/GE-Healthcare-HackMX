function iniciarSesion(usuario) {
  localStorage.setItem("usuario", usuario);
}

function buscarUsuario() {
  const intentoLogin = {
    usuario: document.getElementById("user").value.toLowerCase(),
    clave: document.getElementById("password").value
  }
  let findUser = false;
  const itemUsuarios = localStorage.getItem("usuarios");
  if (itemUsuarios != null) {
    if (JSON.parse(itemUsuarios).usersArray.some(function (elemento) {
      return elemento.usuario === intentoLogin.usuario && elemento.clave === intentoLogin.clave;
    })) {
      iniciarSesion(intentoLogin.usuario);
      findUser = true;
    }
  }
   if(findUser){
    return true;
  } else {
    document.getElementsByClassName("error")[0].classList.remove("ocultar");
    return false;
  }
}
