// * Local Storage
// localStorage.setItem("bienvenida", "¡Hola Coder!");
// localStorage.setItem("esValido", true);
// localStorage.setItem("unNumero", 20);

// let mensaje = localStorage.getItem("bienvenida");
// let bandera1 = localStorage.getItem("esValido");
// let numero = localStorage.getItem("unNumero");

// console.log(mensaje);
// console.log(bandera1);
// console.log(numero);

// *Session Storage
// sessionStorage.setItem("seleccionados", [1, 2, 3]);
// sessionStorage.setItem("esValido", false);
// sessionStorage.setItem("email", "info@email.com");

// let lista = sessionStorage.getItem("seleccionados").split(",");
// let bandera2 = sessionStorage.getItem("esValido") == "true";
// let email = sessionStorage.getItem("email");

// console.log(typeof lista);
// console.log(typeof bandera2);
// console.log(typeof email);

// * Recorrer el storage
// for (let i = 0; i < localStorage.length; i++) {
//   let clave = localStorage.key(i);
//   console.log("Clave: " + clave);
//   console.log("Valor: " + localStorage.getItem(clave));
// }

// * Eliminar del storage
// localStorage.setItem("bienvenida", "¡Hola Code!");
// sessionStorage.setItem("esValido", true);
// localStorage.removeItem("bienvenida");
// sessionStorage.removeItem("esValido");
// localStorage.clear();
// sessionStorage.clear();

// * Objecto to JSON
// const producto1 = { id: 2, producto: "Arroz" };
// const enJSON = JSON.stringify(producto1);
// console.log(enJSON);
// console.log(typeof producto1);
// console.log(typeof enJSON);
// localStorage.setItem("producto1", enJSON);

// * JSON to Object
// const enJSON = '{"id":2,"producto":"Arroz"}';
// const producto1 = JSON.parse(enJSON);
// console.log(typeof producto1);
// console.log(typeof enJSON);
// console.log(producto1.producto);
// const producto2 = JSON.parse(localStorage.getItem("producto1"));
// console.log(producto2.id);

// Almacenarr Array en Objetos
// const productos = [
//   { id: 1, producto: "Arroz", precio: 125 },
//   { id: 2, producto: "Fideo", precio: 70 },
//   { id: 3, producto: "Pan", precio: 50 },
//   { id: 4, producto: "Flan", precio: 100 },
// ];

// const guardarLocal = (clave, valor) => {
//   localStorage.setItem(clave, valor);
// };

// for (const producto of productos) {
//   guardarLocal(producto.id, JSON.stringify(producto));
// }

// guardarLocal("listaProductos", JSON.stringify(productos));

// class Producto {
//   constructor(obj) {
//     this.nombre = obj.producto.toUpperCase();
//     this.precio = parseFloat(obj.precio);
//   }
//   sumarIva() {
//     this.precio = this.precio * 1.19;
//   }
// }

// const almacenadas = JSON.parse(localStorage.getItem("listaProductos"));
// const productos1 = [];
// for (const objects of almacenadas) productos1.push(new Producto(objects));
// for (const producto of productos1) producto.sumarIva();

// * Recuperar estados previo
// let usuario;
// let usuarioEnLS = JSON.stringify(localStorage.getItem("usuario"));

// if (usuarioEnLS) {
//   usuario = usuarioEnLS;
// } else {
//   usuario = prompt("Ingrese su nombre de usuario");
// }

// let carrito = [];
// let carritoEnLS = JSON.stringify(localStorage.getItem("carrito"));
// if (carritoEnLS) {
//   carrito = carritoEnLS;
// }
// renderCarrito(carrito);
