// const personal = {
//   nombre: "Homero",
//   edad: 39,
//   calle: "Av. Siempreviva 742",
// };
// console.log(personal.nombre);
// console.log(personal.edad);
// console.log(personal.calle);

// let producto2 = {
//   nombre: "manzana",
//   categoria: "fruta",
//   precio: 23,
//   nutrientes: {
//     carbohidratos: 0.95,
//     grasas: 0.3,
//     proteinas: 0.2,
//   },
// };
// console.log(producto2.nutrientes.proteinas);

// Constructores
function Persona(nombre, edad, calle) {
  this.nombre = nombre;
  this.edad = edad;
  this.calle = calle;
}
const Persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
