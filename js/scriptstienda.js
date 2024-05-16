// ESTE CODIGO ES DE LA ENTREGA ANTERIOR PARA PEDIR CONTRASEÑA Y QUE SE MUESTRE LA TIENDA, pero para ejecutar con quokka no me mostraba los resultados por el prompt, por eso la oculte.

//let contrasena=prompt("Teclea `contraseña`sí quieres ordenar en línea, de lo contrario registrate como nuevo usuario");
//while (contrasena!="contraseña"){
    //alert("Crea un nuevo usuario");
    //contrasena=prompt("Teclea `contraseña`sí quieres ordenar en línea")
   
//}


// Array de objetos dónde cada objeto es un producto de bebida.
const productosBebidas = [
    //Pluma Hidalgo
    { variedad:"Pluma Hidalgo", cantidad:1, tipo: "Americano",costo:50.00},
    { variedad:"Pluma Hidalgo", cantidad:1, tipo: "Capuchino",costo:55.00},
    { variedad:"Pluma Hidalgo", cantidad:1, tipo: "Expresso",costo:50.00},
    { variedad:"Pluma Hidalgo", cantidad:1, tipo: "Mocaccino",costo:55.00},
    //Atoyac
    { variedad:"Atoyac", cantidad:1, tipo: "Americano",costo:40.00},
    { variedad:"Atoyac", cantidad:1, tipo: "Capuchino",costo:45.00},
    { variedad:"Atoyac", cantidad:1, tipo: "Expresso",costo:40.00},
    { variedad:"Atoyac", cantidad:1, tipo: "Mocaccino",costo:45.00},
    //Coatepec
    { variedad:"Coatepec", cantidad:1, tipo: "Americano",costo:40.00},
    { variedad:"Coatepec", cantidad:1, tipo: "Capuchino",costo:45.00},
    { variedad:"Coatepec", cantidad:1, tipo: "Expresso",costo:40.00},
    { variedad:"Coatepec", cantidad:1, tipo: "Mocaccino",costo:45.00},
    //Orgánico Certificado
    { variedad:"Orgánico", cantidad:1, tipo: "Americano",costo:55.00},
    { variedad:"Orgánico", cantidad:1, tipo: "Capuchino",costo:60.00},
    { variedad:"Orgánico", cantidad:1, tipo: "Expresso",costo:55.00},
    { variedad:"Orgánico", cantidad:1, tipo: "Mocaccino",costo:60.00},
    //Chocolate
    { variedad:"Chocolate de Oaxaca", cantidad:1, tipo: "Mocaccino",costo:55.00}

];
//Función para buscar las bebidas de precio más bajo con filter para que me un listado de las más baratas.
function elMasBarato(bebida){
    return bebida.costo <= 40;
}


//Utilize filter para obtener todas las posibilidades de bebida menores o iguales a 40* (No se si hay una forma de detectar el número más pequeño en los datos, por ejemplo para saber la cantidad de letras usamos el lenght, pero quisiera saber si aqui hay una opción que sin saber el precio me muestre el mas bajo, por ejemplo en clase vimos como acomodarlos con SORT, Pense en ese , de tal forma que solo me mostrara en filter los colocados en las primeras posiciones, pero aun asi sin saber cuantas serían, solo se pondría un número al azar para mostrar esos elementos, esta pregunta me interesa =D espero me puedan ayudar)
const filtroPrecio = productosBebidas.filter(elMasBarato);
console.log(filtroPrecio);

const recomendaciones = {
    "todos" : [ document.getElementById("granoPlumaHidalgo"),document.getElementById ("granoAtoyac"),document.getElementById ("granoCoatepec"), document.getElementById("granoOrganico"),document.getElementById("bebidaAmericano"),document.getElementById("bebidaCapuchino"),document.getElementById("bebidaExpresso"),document.getElementById("bebidaMocaccino"),document.getElementById("bebidaChocolate")],

    "cafe de grano": [ document.getElementById("granoPlumaHidalgo"),document.getElementById ("granoAtoyac"), document.getElementById("granoCoatepec"), document.getElementById("granoOrganico")],

    "bebidas calientes": [ document.getElementById("bebidaAmericano"),document.getElementById("bebidaCapuchino"),document.getElementById("bebidaExpresso"),document.getElementById("bebidaMocaccino"),document.getElementById("bebidaChocolate")],

    "chocolate": [ document.getElementById("bebidaChocolate")],

    "temporada" : [ document.getElementById("granoOrganico"),document.getElementById("granoPlumaHidalgo"),document.getElementById("bebidaChocolate")],
};
function actualizarRecomendaciones(tipo){
    const listaProductos = document.getElementById("lista-productos");
    const productos = recomendaciones[tipo];

    let listaHTML="";
    productos.forEach((producto)=>{
        listaHTML += `<li>${producto}</li>`;
    });

    listaProductos.innerHTML=listaHTML;

}
document
.getElementById("selector-tipo")
.addEventListener("change",function(event){
    actualizarRecomendaciones(event.target.value);
});





