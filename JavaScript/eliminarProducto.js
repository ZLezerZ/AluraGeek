import { conectarAPI } from "./conexionAPI.js";
import { listarProductos } from "./mostrarProducto.js";

export function eliminarProducto(){
    const Lista_botones_Eliminar = document.querySelectorAll("[data-boton_desechar]");

    Lista_botones_Eliminar.forEach((boton) => {
      boton.addEventListener("click", async (evento) => {
        evento.preventDefault();
        const cartaProducto = boton.closest(".carta");
        const id_producto = cartaProducto.getAttribute("data-id");
        try {
          await conectarAPI.eliminarProducto(id_producto);
    location.reload();
          alert("Producto eliminado exitosamente.");
        } catch {
          alert("Hubo un problema al intentar eliminar el producto.");
        }
      });
    });
}
