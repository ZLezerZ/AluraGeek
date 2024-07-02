import { tiposError } from "./erroresFormulario.js";
import { mensajes } from "./erroresFormulario.js";

const camposFormulario = document.querySelectorAll("[required]");

camposFormulario.forEach((campo) => {
  campo.addEventListener("blur", () => verificarCampo(campo));
  campo.addEventListener("invalid", (evento) => evento.preventDefault());
});

function verificarCampo(campo) {
  const mensaje = campo.parentNode.querySelector(".mensaje__error");
  mensaje.textContent = "";
  let esNumero = true;
  if (campo.name === "precio") {
    esNumero = /^[0-9]+$/.test(campo.value);
    if (!esNumero) {
      mensaje.textContent = `${mensajes[campo.name].typeMismatch}`;
    } else {
      mensaje.textContent = "";
    }
  };

  console.log("Entró al verificarCampo");
  tiposError.forEach((error) => {
    if (campo.validity[error]) {
      mensaje.textContent = `${mensajes[campo.name][error]}`;
    }
  });
}
