import * as ProductosFunciones from './Funcionalidades/productos.js';

/*Menu de Administrador*/
/* Este menu es el que se le presenta al administrador para que pueda gestionar los productos de la tienda */

export function menuAdmin() {

    let flag = true;

    while(flag){
        let opcion = prompt("Ingrese una opción:\n 1. Agregar un producto\n 2. Modificar informacion de un producto\n 3. Eliminar un producto\n 4. Ver lista de productos\n 5. Modificar precio de un producto\n 6. Modificar stock de un producto\n 7. Salir");

        if (opcion === null) {
            alert("Saliendo del programa...");
            break;
          }

        opcion = parseInt(opcion);

        switch(opcion){
            case 1:
                ProductosFunciones.agregarNuevoProducto();
                break;
            case 2:
                ProductosFunciones.modificarListaProductos();
                break;  
            case 3:
                ProductosFunciones.eliminarProducto();
                break;
            case 4: 
                ProductosFunciones.verListaProductos();
                break;
            case 5:
                ProductosFunciones.modificarPrecioProducto();
                break;
            case 6:
                ProductosFunciones.modificarStockProducto();
                break;
            case 7:
                alert("Saliendo del programa...");
                flag = false;
                break;
            default:
                alert("Opción no válida. Por favor, elija una opción válida.");
                break;
        }
    }
}