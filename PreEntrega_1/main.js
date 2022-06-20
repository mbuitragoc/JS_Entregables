class Mascota {
  constructor(nombre, edad, genero, especie) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
    this.especie = especie;
  }
}

function ingresarMascota() {
  name = prompt("Ingrese el nombre de la mascota");
  age = +prompt("Ingrese la edad de la mascota");
  sex = prompt("Ingrese el sexo de la mascota");
  type = prompt("Ingrese la especie de la mascota");
  const $name = new Mascota(name, age, sex, type);
  return $name;
}

function retirarMascota() {
  retiro = prompt("Nombre de la mascota a retirar:");
  console.log(Guarderia);
  indexRetiro = Guarderia.indexOf(Guarderia.find((e) => e.nombre == retiro));
  Guarderia.splice(indexRetiro, 1);
  alert(retiro + " ah sido retirada de la guarderia");
  console.log(Guarderia);
}

const Guarderia = [];
const PetShop = [
  {
    id: 1,
    name: "AgilityGold Grandes Cachorros 1.5Kg",
    type: "Dog Food",
    precio: 34000,
  },
  {
    id: 2,
    name: "AgilityGold Grandes Cachorros 3Kg",
    type: "Dog Food",
    precio: 50000,
  },
  {
    id: 3,
    name: "AgilityGold Grandes Cachorros 15Kg",
    type: "Dog Food",
    precio: 250000,
  },
  {
    id: 4,
    name: "AgilityGold Gatos Caceros 15Kg",
    type: "Cat Food",
    precio: 190000,
  },
  {
    id: 5,
    name: "Dulces de Limpieza Dental",
    type: "Prizes",
    precio: 1500,
  },
  {
    id: 6,
    name: "Cama Grande",
    type: "Beds",
    precio: 120000,
  },
];

const ejemplo = new Mascota("Zaphi", 1, "F", "Perro");
Guarderia.push(ejemplo);

function agregarCarro(type) {
  const carroCompra = [];
  const producto = PetShop.filter((e) => e.type == type);
  console.log(producto);
  item = +prompt("Que item desea comprar?");
  quantity = +prompt("Cuantos items desea llevar?");
  for (let i = 0; i < quantity; i++) {
    carroCompra.push(producto[item - 1]);
  }
  return carroCompra;
}

function compraPetShop() {
  const compra = [];
  tipo = +prompt("Que tipo de item buscas?");
  switch (tipo) {
    case 1:
      agregarCarro("Dog Food").forEach((e) => {
        compra.push(e);
      });
      console.log(compra);
      break;
    case 2:
      agregarCarro("Cat Food").forEach((e) => {
        compra.push(e);
      });
      console.log(compra);
      break;
    case 3:
      agregarCarro("Prizes").forEach((e) => {
        compra.push(e);
      });
      console.log(compra);
      break;
    case 4:
      agregarCarro("Beds").forEach((e) => {
        compra.push(e);
      });
      console.log(compra);
      break;
    default:
      alert("El valor ingresado no corresponde a ninguna categoria");
      break;
  }
  valores = compra.map((e) => e.precio);
  console.log(
    "el total es " +
      valores.reduce((p, e) => {
        // console.log(`P=${p} e=${e}`);
        return p + e;
      })
  );
}

servicios = +prompt("Que servicio desea utilizar?");
switch (servicios) {
  case 1:
    alert("Ingresando a la guarderia");
    Guarderia.push(ingresarMascota());
    console.log(Guarderia);
    break;
  case 2:
    retirarMascota();
    break;
  case 3:
    compraPetShop();
    break;
  default:
    alert("El valor ingresado no corresponde a ningun servicios");
}
