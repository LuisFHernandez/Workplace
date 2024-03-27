const btnCrearNota = document.getElementById("crear-nota");
const txtFocalizar = document.getElementById("focalizar");
const txtDeconstruir = document.getElementById("deconstruir");
const txtAlternativas = document.getElementById("alternativas");
const txtNota = document.getElementById("nota");
const btnCopiarNota = document.getElementById("copiar-nota");

btnCrearNota.addEventListener("click", () => {
  let nota = "";
  nota += `SE COMUNICA DEBIDO A ${txtFocalizar.value}\n`;
  nota += `SE ABORDA  ${txtDeconstruir.value}\n`;
  nota += `SE CANALIZA A  ${txtAlternativas.value}\n`;
  txtNota.textContent = nota;
});

btnCopiarNota.addEventListener("click", () => {
  navigator.clipboard.writeText(txtNota.textContent);
  alert("¡Texto copiado al portapapeles!");
});

