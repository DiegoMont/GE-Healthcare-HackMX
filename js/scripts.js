localStorage.setItem("usuarios", '{"usersArray":[{"usuario":"d12345", "clave":"1234"},{"usuario":"p12345", "clave":"1234"}]}');

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
    let usuario = document.getElementById("user").value.toLowerCase();
    if (usuario[0] === 'p') {
      document.getElementById("submit").href="paciente-incubadora.html";
      return true;
    }
    else if (usuario[0] === 'd') {
      document.getElementById("submit").href = "inicio-doctor.html";
      return true;
    }
    else {
     document.getElementsByClassName("error")[0].classList.remove("ocultar");
     return false;
    }
    
  } else {
    document.getElementsByClassName("error")[0].classList.remove("ocultar");
    return false;
  }
}
