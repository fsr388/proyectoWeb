
/**const usuarioValido = "usuario1";

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


iniciarSesion(); */

let input_nombre = document.getElementById ("registerName").value;
let input_mail = document.getElementById ("registerEmail").value;
let input_contraseña = document.getElementById ("registerPassword").value;

let nuevo_usuario = new Array();

let manejoError = document.getElementById("manejoError");

let clickRegistrate = document.getElementById("clickRegistrate");
clickRegistrate.addEventListener ("click",()=>{
    if (validar_formulario()){
      generarUsuario();
    }

})


let clickBorrar = document.getElementById("clickBorrar");

clickBorrar.addEventListener("click",()=>{

  resetear_form();
})





function validar_formulario(){

  let input_nombre = document.getElementById ("registerName").value;
  let input_mail = document.getElementById ("registerEmail").value;
  let input_contraseña = document.getElementById ("registerPassword").value;
  manejoError.innerHTML ="";



let arreglo_mensaje = new Array ();

  if (!input_nombre ){
    arreglo_mensaje.push ("Ingrese su nombre");
  }


  if (!input_mail ){
    arreglo_mensaje.push ("Ingrese su mail");

  }

  if (!input_contraseña ){
    arreglo_mensaje.push ("Ingrese su contraseña");
    
  }


  if (arreglo_mensaje.length>0){

    let lista = document.createElement ("ul");
    lista.textContent = "No es posible cargar los datos"

    arreglo_mensaje.forEach(Element => {
      lista.appendChild(crear_li(Element));
    });
  }
    manejoError.appendChild(lista);
   
    return arreglo_mensaje.length == 0;
 
}



function crear_li (mensaje){

  let li = document.createElement("li");
  li. textContent = mensaje;
}






function generarUsuario(){


  let nombre = document.getElementById("registerName").value;
  let mail = document.getElementById("registerEmail").value;
  let contraseña = document.getElementById("registerPassword").value;

  let usuario = new usuario(nombre,mail,contraseña);

    nuevo_usuario.push(usuario);



}

generarUsuario(usuario)
    


function resetear_form(){

  document.getElementById("registerName").value = "";
  document.getElementById("registerEmail").value = "";
  document.getElementById("registerPassword").value = "";
  
}
resetear_form(); 




