class Mascota {
  constructor(nombre, edad, genero, especie, id) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
    this.especie = especie;
    this.id = id;
  }
}

let listaGuarderia = JSON.parse(localStorage.getItem("datosGuarderia"));

function mostrarGuarderia() {
  const guarderia = document.getElementById("guarderia");
  guarderia.innerHTML = "";

  let especie;
  const row = document.createElement("div");
  row.classList.add("row");
  row.classList.add("gap-2");

  for (const mascota of listaGuarderia) {
    let card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("col-3");
    card.classList.add("p-2");
    if (mascota.especie == "Perro") {
      especie = "perro";
    } else if (mascota.especie == "Gato") {
      especie = "gato";
    } else {
      especie = "other";
    }
    card.innerHTML = `<img src="./icons/${especie}.jpg">
                      <h5 class="card-title pt-1"> ${mascota.id}. ${mascota.nombre}</h5>
                      <p> Edad: ${mascota.edad}, Genero: ${mascota.genero}, ID: ${mascota.id}`;
    row.append(card);
  }
  guarderia.append(row);
}

document.getElementById("agregar").addEventListener("click", function () {
  const nombre = document.getElementById("nombre").value;
  const edad = document.getElementById("edad").value;
  const genero = document.getElementById("genero").value;
  const especie = document.getElementById("especie").value;
  const id = listaGuarderia.length + 1;
  const mascota = new Mascota(nombre, edad, genero, especie, id);
  listaGuarderia.push(mascota);
  document.getElementById(
    "mensaje"
  ).innerHTML = `<p>${nombre} ingreso en la Guarderia</p>`;
  mostrarGuarderia();
  localStorage.setItem("datosGuarderia", JSON.stringify(listaGuarderia));
});

document.getElementById("eliminar").addEventListener("click", function () {
  const nombre = document.getElementById("nombre").value;
  indexRetiro = listaGuarderia.indexOf(
    listaGuarderia.find((e) => e.nombre == nombre)
  );
  listaGuarderia.splice(indexRetiro, 1);
  document.getElementById(
    "mensaje"
  ).innerHTML = `<p>${nombre} fue retirada de la Guarderia</p>`;
  mostrarGuarderia();
  localStorage.setItem("datosGuarderia", JSON.stringify(listaGuarderia));
});

if (localStorage.getItem("datosGuarderia")) {
  mostrarGuarderia();
} else {
  localStorage.setItem("datosGuarderia", JSON.stringify(datosGuarderia));
  mostrarGuarderia();
}
