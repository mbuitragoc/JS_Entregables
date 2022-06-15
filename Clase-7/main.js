const cursos = [
  { nombre: "JavaScript", precio: 15000 },
  { nombre: "ReactJS", precio: 22000 },
  { nombre: "AngularJS", precio: 22000 },
  { nombre: "Desarrollo Web", precio: 16000 },
];

// * FILTER
// const resultado = cursos.filter((el) => el.nombre.includes("JS"));
// const resultado2 = cursos.filter((el) => el.precio < 14000);
// console.log(resultado);
// console.log(resultado2);

// * SOME
// console.log(cursos.some((el) => el.nombre == "Desarrollo Web"));
// console.log(cursos.some((el) => el.nombre == "VueJS"));

// * MAP
// const nombres = cursos.map((el) => el.nombre);
// console.log(nombres);
// const actualizado = cursos.map((el) => {
//   return {
//     nombre: el.nombre,
//     precio: el.precio * 1.25,
//   };
// });
// console.log(actualizado);

// * REDUCE
// const numeros = [1, 2, 3, 4, 5, 6];
// const total = numeros.reduce(
//   (acumulador, elemento) => acumulador + elemento,
//   0
// );
// console.log(total);
// const miCompra = [
//   { nombre: "Desarrollo Web", precio: 20000 },
//   { nombre: "Javascript", precio: 18750 },
//   { nombre: "ReactJS", precio: 27500 },
// ];
// const total = miCompra.reduce((acc, el) => acc + el.precio, 0);
// console.log(total);

// * SORT
// const numeros = [40, 1, 5, 200];
// numeros.sort((a, b) => a - b);
// console.log(numeros);
// numeros.sort((a, b) => b - a);
// console.log(numeros);

// ! Ejemplo
const productos = [
  { id: 1, producto: "Arroz", precio: 125 },
  { id: 2, producto: "Fideo", precio: 70 },
  { id: 3, producto: "Pan", precio: 50 },
  { id: 4, producto: "Flan", precio: 100 },
];

const buscado = productos.find((producto) => producto.id === 3);
console.log(buscado);

const existe = productos.some((producto) => producto.nombre === "Harina");
console.log(existe);

const baratos = productos.filter((producto) => producto.precio < 100);
console.log(baratos);

const listaNombres = productos.map((producto) => producto.producto);
console.log(listaNombres);
