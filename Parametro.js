var herramientas = [
    "set herramientas",
    "taladro inalambrico",
    "motocultivador",
    "gop",
    "pistola calor",
    "disco amoladora",
    "ingletadora",
    "lijadora",
    "rotomartillo"
  ];
  
  function mostrarMenu() {
    alert("1. Ver máquinas eléctricas \n 2. random \n 3. Salir");
   
  }
  
  function obtenerOpcion() {
    var opcion = prompt("Ingrese su opción:");
  
    return opcion;
  }
  
  
  
  function mostrarMaquinasElectricas() {
    alert("Máquinas eléctricas:");
    for (var i = 0; i < herramientas.length; i++) {
      var herramienta = herramientas[i];
      if (esTipo(herramienta, "electrica")) {
        a.log("- " + herramienta);
      }
    }
  }
  
  function obtenerHerramientaAleatoria() {
    var indiceAleatorio = Math.floor(Math.random() * herramientas.length);
    var herramientaAleatoria = herramientas[indiceAleatorio];
    console.log("Herramienta aleatoria seleccionada: " + herramientaAleatoria);
  }
  
  function esTipo(herramienta, tipo) {
    var maquinasElectricas = [
      "taladro inalambrico",
      "gop",
      "pistola calor",
      "disco amoladora",
      "ingletadora",
      "lijadora",
      "rotomartillo"
    ];
  
    if (tipo === "electrica") {
      return maquinasElectricas.includes(herramienta);
    } else {
      return false;
    }
  }
  
  function menuPrincipal() {
    var opcion;
  
    do {
      mostrarMenu();
     
      opcion = obtenerOpcion();
  
      switch (opcion) {
        case "1":
          mostrarMaquinasElectricas();
          break;
        case "2":
          obtenerHerramientaAleatoria();
          break;
        case "3":
          alert("¡Gracias por visitarnos!");
          break;
        default:
          console.log("Opción inválida.");
          break;
      }
    
    } while (opcion !== "3");
  
    
  }
  
  menuPrincipal();
  
  