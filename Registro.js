/**var nombre = "";
var apellido = "";
var email = "";
var contraseña = "";

function solicitarDatos() {
  nombre = prompt("Ingrese su nombre:");
  apellido = prompt("Ingrese su apellido:");
  email = prompt("Ingrese su correo electrónico:");
  contraseña = prompt("Ingrese su contraseña:");

  while (!esAlfanumerica(contraseña)) {
    alert("La contraseña debe ser alfanumérica.");
    contraseña = prompt("Ingrese su contraseña nuevamente:");
  }
}

function esAlfanumerica(contraseña) {
  var regex = /^[a-zA-Z0-9]+$/;
  return regex.test(contraseña);
}

function mostrarDatos() {
  console.log("Nombre: " + nombre);
  console.log("Apellido: " + apellido);
  console.log("Correo electrónico: " + email);
  console.log("Contraseña: " + contraseña);
}

solicitarDatos();

mostrarDatos();*/