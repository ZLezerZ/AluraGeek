import { listarProductos } from "./mostrarProducto.js";
import { eliminarProducto } from "./eliminarProducto.js";

async function iniciarAplicacion() {
    await listarProductos();
    eliminarProducto();
  }
  
  iniciarAplicacion();