
const usuarioValido = "usuario1";

const contraseñaValida = "1234";


function verificarCredenciales(usuario, contraseña) {


  if (usuarioValido === usuario && contraseñaValida === contraseña) {


    return true;

  }

  return false;


}

function iniciarSesion() {


  let usuarioIngresado = prompt('Ingrese su usuario:');


  let contraseñaIngresada = prompt('Ingrese su contraseña:');

  let intentos = 3;


  while (intentos > 0) {


    if (verificarCredenciales(usuarioIngresado, contraseñaIngresada)) {


      alert('Inicio de sesión exitoso');


      return;


    } else {


      alert('Credenciales inválidas. Intente nuevamente.');


      intentos--;

      usuarioIngresado = prompt('Ingrese su usuario:');

      contraseñaIngresada = prompt('Ingrese su contraseña:');


    }


  }


  alert('Ha excedido el número máximo de intentos. Cierre de sesión.');

}


iniciarSesion();





