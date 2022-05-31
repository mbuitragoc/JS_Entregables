let num = +prompt("Ingrese número");
for (let i = 0; i <= num; i++) {
  if (i % 2 !== 0) {
    console.log(i + " es impar");
  } else {
    console.log(i + " es par");
  }
}
