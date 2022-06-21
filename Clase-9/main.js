// * addEventListener onclick
// let boton1 = document.getElementById("btn1");
// boton1.addEventListener("click", repuestaClick);
// function repuestaClick() {
//   console.log("Respuesta evento 1");
// }

// let boton2 = document.getElementById("btn2");
// boton2.onclick = () => {console.log("Respuesta evento 2");}

// * Eventos del Mouse (mousedown/mouseover/mousemove/click)
// let boton = document.getElementById("btnMain");
// boton.onclick = () => {
//   console.log("Click");
// };
// boton.onmousemove = () => {
//   console.log("Move");
// };

// * Eventos del Teclado
// let input1 = document.getElementById("nombre");
// let input2 = document.getElementById("edad");
// * * Cuando se presiona o suelta una tecla
// input1.onkeyup = () => {
//   console.log("keyUP");
// };
// input2.onkeydown = () => {
//   console.log("keyDown");
// };
// * * Cuando se detecta un cambio en el valor del elemento
// input1.onchange = () => {
//   console.log("valor1");
// };
// input2.onchange = () => {
//   console.log("valor2");
// };
// * * INPUT cada vez que se tipea sobre el campo
// input1.addEventListener("input", () => {
//   console.log(input1.value);
// });
// * * SUBMIT se activa cuando el formulario es enviado
let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);
function validarFormulario(e) {
  e.preventDefault();
  let formulario = e.target;
  console.log(formulario.children[0].value);
  console.log(formulario.children[1].value);
}
