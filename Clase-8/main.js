// * Uso de getElement
// let paises = document.getElementsByClassName("paises");
// let contenedores = document.getElementsByTagName("div");

// for (const pais of paises) {
//   console.log(pais.innerHTML);
// }

// for (const div of contenedores) {
//   console.log(div.innerHTML);
// }

// * innerText
// let titulo = document.getElementById("titulo");
// console.log(titulo.innerText);

// titulo.innerText = "Hola Coder!";
// console.log(titulo.innerText);

// * InnerHTML
// let container = document.getElementById("contenedor");
// container.innerHTML = "<h2>Hola Mundo!</h2><p>Lorem ipsum</p>";
// container.className = "container row";

// * Creación de elementos
// let parrafo = document.createElement("p");
// parrafo.innerHTML = "<h2>¡Hola Coder!</h2>";
// document.body.append(parrafo);

// * Eliminar elemento
// let parrafo = document.getElementById("parrafo1");
// parrafo.remove();

// let paises = document.getElementsByClassName("paises");
// paises[0].remove();

// * Obtener datos de input
// document.getElementById("nombre").value = "HOMERO";
// document.getElementById("edad").value = 39;

// * Creando opciones desde un array
// let padre = document.getElementById("personas");
// let personas = ["Homero", "Marge", "Bart", "Lisa", "Maggie"];
// for (const persona of personas) {
//   let li = document.createElement("li");
//   li.innerHTML = persona;
//   padre.appendChild(li);
// }

// * Plantillas literales
// let producto = { id: 1, nombre: "Arroz", precio: 125 };
// let concatenado =
//   "ID: " +
//   producto.id +
//   " - Producto: " +
//   producto.nombre +
//   " $" +
//   producto.precio;
// let plantilla = `ID: ${producto.id} - Producto: ${producto.nombre} $${producto.precio}`;

// console.log(concatenado);
// console.log(plantilla);

// * Crear elementos desde objetos
// const productos = [
//   { id: 1, nombre: "Arroz", precio: 125 },
//   { id: 2, nombre: "Fideo", precio: 70 },
//   { id: 3, nombre: "Pan", precio: 50 },
//   { id: 4, nombre: "Flan", precio: 100 },
// ];

// for (const producto of productos) {
//   let contenedor = document.createElement("div");
//   contenedor.innerHTML = `<h3> ID: ${producto.id} </h3>
//                           <p> Producto: ${producto.nombre}</p>
//                           <b> $ ${producto.precio} </b>`;
//   document.body.appendChild(contenedor);
// }

// * Query Selector
let parrafo = document.querySelector("#contenedor p");
let contenedor = document.querySelector("#contenedor");
parrafo = document.querySelector(".texto");
