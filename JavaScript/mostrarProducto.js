import { conectarAPI } from "./conexionAPI.js";

const listaProductos = document.querySelector("[data-listaProductos]");
//Función para construir y devolver una carta con los parámetros puestos
function construirCartaProducto(id_producto, nombre, precio, imagen) {
  const cartaProducto = document.createElement("li");
  cartaProducto.setAttribute("data-id", id_producto);
  cartaProducto.className = "carta";
  cartaProducto.innerHTML = `<picture>
                            <img src="${imagen}" alt="${nombre}">
                        </picture>
                        <div class="producto__info">
                            <p>${nombre}</p>
                            <div class="valor__producto">
                                <p>$${precio}</p>
                                <i class="fa-solid fa-trash-can" data-boton_desechar></i>
                            </div>
                        </div>`;
  return cartaProducto;
};

export async function listarProductos(){
    try{
        const listaAPI = await conectarAPI.listarProductos();
        listaAPI.forEach(element => {
            listaProductos.appendChild(construirCartaProducto(element.id, element.nombre, element.precio, element.imagen));
        });
    }catch(e){
        listaProductos.innerHTML= `<h2 class="error_al_listar">No fue posible cargar la lista de productos <br><br>=(</h2>`;
    };
};