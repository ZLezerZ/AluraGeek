import { conectarAPI } from "./conexionAPI.js";

const formulario = document.querySelector("[data-formulario]");
formulario.addEventListener("submit", (evento) => agregarCarta(evento));

async function agregarCarta(evento) {
  evento.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const precio = document.getElementById("precio").value.trim();
  const imagen = document.getElementById("imagen").value.trim();

  if (!nombre || isNaN(precio) || !precio || !imagen) {
      alert("Por favor, complete todos los campos con valores válidos.");
      return;
  }
  try {
    await conectarAPI.agregarCarta(nombre, precio, imagen);
    alert("¡Se ha añadido el producto exitosamente!");
    location.reload();
  } catch (e) {
    alert(e);
  }
};
