async function listarProductos(){
    const conexion = await fetch("http://localhost:3001/productos",{
        method: "GET",
        headers:{
            "Content-type":"application/json"
        }
    });
    const listaProductos = await conexion.json();
    return listaProductos
};

async function agregarCarta(nombre,precio,imagen){
    const conexion = await fetch ("http://localhost:3001/productos",{
        method: "POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify({
            nombre:nombre,
            precio:precio,
            imagen:imagen
        })
    });
    if(!conexion.ok){
        throw new Error("No fue posible agregar el producto a la lista");
    };
    const listaProductos = await conexion.json();
    return listaProductos;
};
async function eliminarProducto(id_producto){
    console.log("Se entró en el método EliminarProducto de la conexión API. El ID es: "+id_producto);
    const conexion = await fetch(`http://localhost:3001/productos/${id_producto}`,{
        method: "DELETE",
        headers:{
            "Content-type": "application/json",
        }
    });
    if(!conexion.ok){
        console.log("Hubo un error en eliminar producto del Conexión Api")
        throw new Error("No fue posible agregar el producto a la lista"); 
    };
    const listaActualizada = await conexion.json();
    return listaActualizada;
};

export const conectarAPI = {
    listarProductos, agregarCarta, eliminarProducto
};