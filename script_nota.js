// Elementos principales del DOM
const btnCrearNota = document.getElementById("crear-nota");
const txtFocalizar = document.getElementById("focalizar");
const txtDeconstruir = document.getElementById("deconstruir");
const txtAlternativas = document.getElementById("alternativas");
const txtNota = document.getElementById("nota");
const btnCopiarNota = document.getElementById("copiar-nota");

// Nuevos botones para mayúsculas y minúsculas
const btnMinusculas = document.getElementById("minusculas");
const btnMayusculas = document.getElementById("mayusculas");

// Función: Convertir el texto de las cajas a minúsculas
btnMinusculas.addEventListener("click", () => {
  txtFocalizar.value = txtFocalizar.value.toLowerCase();
  txtDeconstruir.value = txtDeconstruir.value.toLowerCase();
  txtAlternativas.value = txtAlternativas.value.toLowerCase();
});

// Función: Convertir el texto de las cajas a mayúsculas
btnMayusculas.addEventListener("click", () => {
  txtFocalizar.value = txtFocalizar.value.toUpperCase();
  txtDeconstruir.value = txtDeconstruir.value.toUpperCase();
  txtAlternativas.value = txtAlternativas.value.toUpperCase();
});

// Función: Crear nota con el contenido de las cajas
btnCrearNota.addEventListener("click", () => {
  let nota = "";
  nota += `SE COMUNICA DEBIDO A ${txtFocalizar.value}\n`;
  nota += `SE ABORDA  ${txtDeconstruir.value}\n`;
  nota += `SE CANALIZA A  ${txtAlternativas.value}\n`;
  txtNota.textContent = nota;
});

// Función: Copiar el texto de la nota al portapapeles
btnCopiarNota.addEventListener("click", () => {
  navigator.clipboard.writeText(txtNota.textContent);
  alert("¡Texto copiado al portapapeles!");
});
