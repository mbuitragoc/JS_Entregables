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

const ejemplo = new Mascota("Zaphi", 1, "F", "Perro");
Guarderia.push(ejemplo);

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
  default:
    alert("El valor ingresado no corresponde a ningun servicios");
}
