// Función para leer una entrada del usuario desde la consola
function leerEntrada(mensaje) {
    return prompt(mensaje);
  }
  
  // Función para mostrar un mensaje en pantalla
  function mostrarMensaje(mensaje) {
    console.log(mensaje);
  }
  
  // Función para validar si un valor es un número válido
  function esNumeroValido(valor) {
    return !isNaN(parseFloat(valor)) && isFinite(valor);
  }
  
  // Función para realizar la suma de los números ingresados
  function sumarNumeros(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
      suma += numeros[i];
    }
    return suma;
  }
  
  // Función para realizar la resta de los números ingresados
  function restarNumeros(numeros) {
    let resta = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
      resta -= numeros[i];
    }
    return resta;
  }
  
  // Función para realizar la multiplicación de los números ingresados
  function multiplicarNumeros(numeros) {
    let multiplicacion = 1;
    for (let i = 0; i < numeros.length; i++) {
      multiplicacion *= numeros[i];
    }
    return multiplicacion;
  }
  
  // Función para realizar la división de los números ingresados
  function dividirNumeros(numeros) {
    let division = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
      division /= numeros[i];
    }
    return division;
  }
  
  // Función principal del programa
  function calcular() {
    let cantidadNumeros = parseInt(leerEntrada("Ingrese la cantidad de números que desea utilizar:"));
  
    while (!esNumeroValido(cantidadNumeros)) {
      cantidadNumeros = parseInt(leerEntrada("Cantidad inválida. Ingrese la cantidad de números nuevamente:"));
    }
  
    let numeros = [];
  
    for (let i = 0; i < cantidadNumeros; i++) {
      let numero = leerEntrada("Ingrese el número " + (i + 1) + ":");
  
      while (!esNumeroValido(numero)) {
        numero = leerEntrada("Número inválido. Ingrese el número " + (i + 1) + " nuevamente:");
      }
  
      numeros.push(parseFloat(numero));
    }
  
    mostrarMensaje("Opciones de operaciones:");
    mostrarMensaje("a) Suma");
    mostrarMensaje("b) Resta");
    mostrarMensaje("c) Multiplicación");
    mostrarMensaje("d) División");
  
    let opcion = leerEntrada("Ingrese el número correspondiente a la operación:");
  
    while (opcion !== 'a' && opcion !== 'b' && opcion !== 'c' && opcion !== 'd') {
      opcion = leerEntrada("Opción inválida. Ingrese el número correspondiente a la operación nuevamente:");
    }
  
    let resultado;
  
    switch (opcion) {
      case 'a':
        resultado = sumarNumeros(numeros);
        mostrarMensaje("La suma de los números es: " + resultado);
        break;
      case 'b':
        resultado = restarNumeros(numeros);
        mostrarMensaje("La resta de los números es: " + resultado);
        break;
      case 'c':
        resultado = multiplicarNumeros(numeros);
        mostrarMensaje("La multiplicación de los números es: " + resultado);
        break;
      case 'd':
        resultado = dividirNumeros(numeros);
        mostrarMensaje("La división de los números es: " + resultado);
        break;
    }
  
    let realizarOtraOperacion = leerEntrada("¿Desea realizar otra operación? (Sí/No)");
  
    while (realizarOtraOperacion.toLowerCase() !== 'si' && realizarOtraOperacion.toLowerCase() !== 'sí' &&
      realizarOtraOperacion.toLowerCase() !== 'no') {
      realizarOtraOperacion = leerEntrada("Respuesta inválida. ¿Desea realizar otra operación? (Sí/No)");
    }
  
    if (realizarOtraOperacion.toLowerCase() === 'si' || realizarOtraOperacion.toLowerCase() === 'sí') {
      calcular();
    } else {
      mostrarMensaje("Programa finalizado.");
    }
  }
  
  // Iniciar el programa
  calcular();
  