// * operador ++
// let num = 10;
// console.log((num = num + 1));
// console.log((num += 1));
// console.log(num++);

// * Operador Terciario
// let temperatura = 20;
// temperatura > 30 ? console.log("Dia caluroso!") : console.log("Dia Agradable");
// * El operador ofrece un return implicito
// const usuario = {
//   nombre: "John Doe",
//   edad: 22,
// };
// const permiso = usuario.edad >= 18 ? true : false;
// permiso ? console.log("Puede comprar 🍺") : console.log("No puede comprar 😂");

// * Operador Logico AND
// const carrito = [];
// if (carrito.length === 0) {
//   console.log("El carrito está vacio!");
// }
// carrito.length === 0 && console.log("El carrito está vacio!");
// * AND tambien tiene return implicito
// const usuario = {
//   nombre: "John Doe",
//   edad: 18,
// };
// const registroIngreso = usuario.edad >= 18 && new Date();
// console.log(registroIngreso);

// * Operador OR si no es falsy devuelve op1 de resto op2
// const usuario1 = {
//   nombre: "John Doe",
//   edad: 22,
// };
// const usuario2 = null;
// console.log(usuario1 || "El usuario no existe");
// console.log(usuario2 || "El usuario no existe");
// * EJ2
// let carrito;
// let carritoLocalStorage = JSON.parse(localStorage.getItem("carrito"));
// if (carritoLocalStorage) {
//   carrito = carritoLocalStorage;
// } else {
//   carrito = [];
// }
// const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// * Operador Nullish Coalescing ?? solo optiene nullish en null o undefined
// console.log(0 ?? "Nullish");
// console.log(null ?? "Nullish");
// console.log(undefined ?? "Nullish");
// console.log("" ?? "Nullish");

// * Acceso condicional a un objeto
// const usuario = null
// console.log(usuario.nombre || "El usuario no existe");
// console.log(usuario?.nombre || "El usuario no existe");
// const usuario = {
//   nombre: "Joh Doe",
//   edad: 22,
//   cursos: {
//     javascript: "aprobado",
//   }
// }
// console.log(usuario?.cursos?.javascript || "La propiedad no existe");
// console.log(usuario?.trabajos?.coderhouse || "La propiedad no existe");

// * Decosntruccion
// const usuario = {
//   nombre: "John Doe",
//   edad: 32,
//   telefono: {
//     cel: 113334444,
//     casa: null,
//     trabajo: 113325555,
//   },
// };
// let nombre = usuario.nombre;
// let edad = usuario.edad;
// let {
//   nombre,
//   edad,
//   telefono: { trabajo },
// } = usuario;
// console.log(nombre, edad, trabajo);

// * ALIAS
const item = {
  item_id: 432,
  product_name: "Some product",
  price_per_unit: 5600,
};
const { item_id: id, product_name: nombre, price_per_unit: precio } = item;
console.log(id);
console.log(nombre);
console.log(precio);
