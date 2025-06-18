// import * as Validaciones from "../../../Validaciones/Validaciones.js";

// //Arreglo de objetos que representa una lista de productos en una tienda de ropa, a modo de ejemplo para tener datos cargados previamente

// export const productos = [
//     {
//       id: 1,
//       nombre: "Camisa Oxford",
//       categoria: "Camisas",
//       precio: 25.99,
//       stock: 15,
//       descripcion: "Camisa de algodón con botones, ideal para eventos casuales o formales.",
//       estado: true
//     },
//     {
//       id: 2,
//       nombre: "Pantalón Chino",
//       categoria: "Pantalones",
//       precio: 39.50,
//       stock: 20,
//       descripcion: "Pantalón de corte recto con tela suave y resistente, estilo versátil.",
//       estado: true
//     },
//     {
//       id: 3,
//       nombre: "Zapatillas Urbanas",
//       categoria: "Calzado",
//       precio: 59.90,
//       stock: 10,
//       descripcion: "Zapatillas cómodas y modernas para uso diario.",
//       estado: true
//     },
//     {
//       id: 4,
//       nombre: "Campera de Jean",
//       categoria: "Abrigos",
//       precio: 74.25,
//       stock: 8,
//       descripcion: "Campera clásica de mezclilla, resistente al desgaste.",
//       estado: true    
//     },
//     {
//       id: 5,
//       nombre: "Remera Estampada",
//       categoria: "Remeras",
//       precio: 19.99,
//       stock: 30,
//       descripcion: "Remera de algodón con estampado gráfico juvenil.",
//       estado: true
//     }
//   ];


// /*Funcion para agregar un nuevo producto a la lista*/

// export function agregarNuevoProducto(){

//     let nombre,categoria,precio,stock,descripcion = null;

//     //Validamos el nombre del producto

//     while(true){

//         nombre = Validaciones.pedirDatoString("Ingrese el nombre del producto", Validaciones.validacionGeneralString);        
//         if(nombre === null) {
//             return;
//         }

//         // Verificar si el nombre ya existe en la lista de productos
//         const existe = productos.some(producto => producto.nombre.toLowerCase() === nombre.toLowerCase());
//         if (existe) {
//             alert("El producto ya existe en la lista. Por favor, ingrese un nombre diferente.");
//             continue;
//         }    
//         break;
//     } 

//     //Validamos la categoria del producto

//     categoria = Validaciones.pedirDatoString("Ingrese la categoria del producto", Validaciones.validacionGeneralString);
//     if(categoria === null) {
//         return;
//     }

//     // Validamos el precio del producto

//     precio = Validaciones.pedirDatoFlotante("Ingrese el precio del producto", Validaciones.validacionGeneralFlotante);
//     if(precio === null) {
//         return;
//     }  

//     precio = parseFloat(precio);

//     // Validamos el stock del producto

//     stock = Validaciones.pedirDatoEntero("Ingrese el stock del producto", Validaciones.validacionGeneralEntero);
//     if(stock === null) {
//         return;
//     }

//     stock = parseInt(stock);

//     // Validamos la descripcion del producto

//     while(true) {
//         descripcion = Validaciones.pedirDatoString("Ingrese una descripcion del producto", Validaciones.validacionGeneralString);

//         if (descripcion === null) {
//             return;
//         }

//         // Verificamos que la descripción no sea demasiado larga

//         if (descripcion.length > 200) {
//             alert("La descripción es demasiado larga. Por favor, ingrese una descripción más corta (máximo 200 caracteres).");
//             continue;
//         }

//         break;
//     }

//     // Creamos el nuevo producto y lo agregamos a la lista

//     const nuevoProducto = {
//         id: productos.length + 1, 
//         nombre: nombre,
//         categoria: categoria,
//         precio: precio,
//         stock: stock,
//         descripcion: descripcion,
//         estado: true
//     }

//     productos.push(nuevoProducto);
//     alert("Producto agregado correctamente");
// }

// /*Funcion para ver la lista de productos*/

// export function verListaProductos() {
//     if (productos.length === 0) {
//         alert("No hay productos en la lista.");
//         return;
//     }

    
//     let lista = "Lista de productos:\n\n";
//     console.log("Lista de productos:\n\n"); //Debido a la longitud de la lista, si se quiere ver completa se muestra por consola.

//     productos.forEach(producto => {
//         if(producto.estado === true){
//         lista += `Id: ${producto.id} \nNombre: ${producto.nombre} \nCategoria: ${producto.categoria} \nPrecio: $${producto.precio.toFixed(2)} \nStock: ${producto.stock} \nDescripción: ${producto.descripcion}\n\n`;
//         console.log(`Id: ${producto.id} \nNombre: ${producto.nombre} \nCategoria: ${producto.categoria} \nPrecio: $${producto.precio.toFixed(2)} \nStock: ${producto.stock} \nDescripción: ${producto.descripcion}\n\n`);
//         }
//     });

//     alert(lista);
//     alert("Lista de productos completa mostrada en la consola para ver detalles completos.");
// }

// /*Funcion para modificar informacion de un producto de la lista*/

// export function modificarListaProductos(){

//     verListaProductos();

//     if (productos.length === 0) {
//         alert("No hay productos en la lista.");
//         return;
//     }

//     let idProducto = null;

//     idProducto = Validaciones.pedirDatoEntero("Ingrese el ID del producto que desea modificar", Validaciones.validacionGeneralEntero);
//     if (idProducto === null) {
//         return;
//     }

//     idProducto = parseInt(idProducto); // Aseguramos que el ID sea un número entero

//     const producto = productos.find(p => p.id === idProducto);
//     if (!producto) {
//         alert("Producto no encontrado.");
//         return;
//     } 
        
//     let nuevoNombre, nuevaCategoria, nuevaDescripcion = null;

//     while(true){

//         nuevoNombre = Validaciones.pedirDatoString(`Ingrese un nuevo nombre del producto (actual: ${producto.nombre})`, Validaciones.validacionGeneralString);        
//         if(nuevoNombre === null) {
//             return;
//         }

//         // Verificar si el nombre ya existe en la lista de productos
//         const existe = productos.some(producto => producto.nombre.toLowerCase() === nuevoNombre.toLowerCase());
//         if (existe) {
//             alert("El producto ya existe en la lista. Por favor, ingrese un nombre diferente.");
//             continue;
//         }    
//         break;
//     } 

//     //Validamos la categoria del producto

//     nuevaCategoria = Validaciones.pedirDatoString(`Ingrese una nueva categoria del producto (actual: ${producto.categoria})`, Validaciones.validacionGeneralString);
//     if(nuevaCategoria === null) {
//         return;
//     }
    
//     // Validamos la descripcion del producto

//     while(true) {
//         nuevaDescripcion = Validaciones.pedirDatoString(`Ingrese una nueva descripcion del producto (actual: ${producto.descripcion})`, Validaciones.validacionGeneralString);

//         if (nuevaDescripcion === null) {
//             return;
//         }

//         // Verificamos que la descripción no sea demasiado larga

//         if (nuevaDescripcion.length > 200) {
//             alert("La descripción es demasiado larga. Por favor, ingrese una descripción más corta (máximo 200 caracteres).");
//             continue;
//         }

//         break;
//     }
    
//     // Actualizar los campos del producto
//     producto.nombre = nuevoNombre || producto.nombre;
//     producto.categoria = nuevaCategoria || producto.categoria;
//     producto.descripcion = nuevaDescripcion || producto.descripcion;

//     alert("Producto modificado correctamente");
    
// }

// /* Funcion para eliminar un producto de la lista */

// export function eliminarProducto() {

//     verListaProductos();

//     if (productos.length === 0) {
//         alert("No hay productos en la lista.");
//         return;
//     }

//     let idProducto = null;

//     idProducto = Validaciones.pedirDatoEntero("Ingrese el ID del producto que desea modificar", Validaciones.validacionGeneralEntero);
//     if (idProducto === null) {
//         return;
//     }

//     idProducto = parseInt(idProducto); // Aseguramos que el ID sea un número entero

//     const index = productos.findIndex(p => p.id === idProducto);
//     if (index === -1) {
//         alert("Producto no encontrado.");
//         return;
//     }

//     productos[index].estado = false; // Cambiamos el estado a false en lugar de eliminarlo esto se hace para generar una baja logica y no perder el registro de los datos 
//     alert("Producto eliminado correctamente");
// }

// /* Funcion para modificar el precio de un producto en especifico */

// export function modificarPrecioProducto() {
//     verListaProductos();

//     if (productos.length === 0) {
//         alert("No hay productos en la lista.");
//         return;
//     }

//     let idProducto = null;

//     idProducto = Validaciones.pedirDatoEntero("Ingrese el ID del producto que desea modificar", Validaciones.validacionGeneralEntero);
//     if (idProducto === null) {
//         return;
//     }

//     idProducto = parseInt(idProducto); // Aseguramos que el ID sea un número entero

//     const producto = productos.find(p => p.id === idProducto);
//     if (!producto) {
//         alert("Producto no encontrado.");
//         return;
//     } 

//     // Validamos el nuevo precio del producto

//     let nuevoPrecio = null;

//     nuevoPrecio = Validaciones.pedirDatoFlotante(`Ingrese el nuevo precio del producto (actual: $${producto.precio.toFixed(2)})`, Validaciones.validacionGeneralFlotante);
//     if(nuevoPrecio === null) {
//         return;
//     }

//     nuevoPrecio = parseFloat(nuevoPrecio);

//     // Actualizar el precio del producto
//     producto.precio = nuevoPrecio || producto.precio;

//     alert("Precio modificado correctamente");
// }

// /* Funcion para modificar el stock de un producto en especifico */

// export function modificarStockProducto() {

//     verListaProductos();

//     if (productos.length === 0) {
//         alert("No hay productos en la lista.");
//         return;
//     }

//     let idProducto = null;

//     idProducto = Validaciones.pedirDatoEntero("Ingrese el ID del producto que desea modificar", Validaciones.validacionGeneralEntero);
//     if (idProducto === null) {
//         return;
//     }

//     idProducto = parseInt(idProducto); // Aseguramos que el ID sea un número entero

//     const producto = productos.find(p => p.id === idProducto);
//     if (!producto) {
//         alert("Producto no encontrado.");
//         return;
//     } 

//     // Validamos el nuevo stock del producto

//     let nuevoStock = null;
//     nuevoStock = Validaciones.pedirDatoEntero(`Ingrese el nuevo stock del producto (actual: ${producto.stock})`, Validaciones.validacionGeneralEntero);
//     if(nuevoStock === null) {
//         return;
//     }

//     nuevoStock = parseInt(nuevoStock);

//     // Actualizar el stock del producto
//     producto.stock = nuevoStock || producto.stock;

//     alert("Stock modificado correctamente");
// }


