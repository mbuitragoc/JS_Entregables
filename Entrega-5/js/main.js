class Mascota {
  constructor(nombre, edad, genero, especie, id) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
    this.especie = especie;
    this.id = id;
  }
}
const Zaphi = new Mascota("Zaphi", 1, "F", "Perro", 1);
const DonGato = new Mascota("DonGato", 3, "M", "Gato", 2);
const enGuarderia = [Zaphi, DonGato, Zaphi, Zaphi, Zaphi];

function mostrarGuarderia() {
  const guarderia = document.getElementById("guarderia");
  guarderia.innerHTML = "";
  let especie;
  const row = document.createElement("div");
  row.classList.add("row");
  row.classList.add("gap-2");
  for (const mascota of enGuarderia) {
    let card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("col-3");
    card.classList.add("p-2");
    if (mascota.especie == "Perro") {
      console.log("perro");
      especie = "perro";
    } else if (mascota.especie == "Gato") {
      especie = "gato";
    } else {
      especie = "other";
    }
    card.innerHTML = `<img src="./icons/${especie}.jpg">
                      <h5 class="card-title pt-1"> ${mascota.id}. ${mascota.nombre}</h5>
                      <p> Edad: ${mascota.edad}, Genero: ${mascota.genero}`;
    row.append(card);
  }
  guarderia.append(row);
}

mostrarGuarderia();
