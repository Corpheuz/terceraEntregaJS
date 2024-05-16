

// CODIGO PARA DAR BIENVENIDA CON PROMPT Y ALERT.
/*let mujer="mujer"
let hombre="hombre" 



let genero = prompt("¿Cuentanos eres hombre o mujer?");
if (genero === "mujer"){
    */let nombreVisitante = prompt("¿Cuál es tu nombre?");

    let primerLetra = nombreVisitante.slice(0,1).toUpperCase();
    let segundaLetra =nombreVisitante.slice(1,nombreVisitante.length).toLowerCase();

let nombreVisitante1=primerLetra+segundaLetra;
   

    /*let saludoMujer = "Hola " +(nombreVisitante1) + " Bienvenida a Café Mictlán";
    //alert(saludoMujer);

} else {
     let nombreVisitante = prompt("¿Cuál es tu nombre?");
     let primerLetra = nombreVisitante.slice(0,1).toUpperCase();
     let segundaLetra =nombreVisitante.slice(1,nombreVisitante.length).toLowerCase();

let nombreVisitante1=primerLetra+segundaLetra;
     let saludoHombre = "Hola " +(nombreVisitante1) + " Bienvenido a Café Mictlán";
    //alert(saludoHombre);


} */

let mensajeBienvenida = document.getElementById("mensaje-bienvenida");


function actualizarMensaje() {

  let horaActual = new Date().getHours();
  console.log(horaActual);
  let mensaje;

  if (horaActual < 12) {
    mensaje = "¡Buenos días, "+nombreVisitante1+ " Bienvenido a Café Mictlán!";
  } else if (horaActual < 19) {
    mensaje = "¡Buenas tardes, "+nombreVisitante1 +" Bienvenido a Café Mictlán!";
  } else {
    mensaje = "¡Buenos noches, "+nombreVisitante1+ " Bienvenido a Café Mictlán!";
  }

  mensajeBienvenida.innerText = mensaje;
}


actualizarMensaje();


/////CONTACTO
function enviarFormulario() {

  //Obtener los valores de los campos de entrada
  let nombre = document.getElementById("nombre5").value;
  let email = document.getElementById("email").value;
  let mensaje = document.getElementById("mensaje").value;

  //Simulamos el envio de datos a un servidor
  console.log("Enviando datos al servidor: ", nombre, email, mensaje);

  //Mostrar una respuesta la usuario
  document.getElementById("respuesta-envio").innerHTML = 
  "<strong>Gracias por contactarnos, " + nombre + "!</strong> <br> Hemos recibido tu mensaje y te responderemos a <em>" + email + "</em> pronto";

  //Limpiamos el formulario
  document.getElementById("formulario-contacto").reset();
}




    


