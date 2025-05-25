//Arreglo de objetos que representa una lista de productos en una tienda de ropa, a modo de ejemplo para tener datos cargados previamente

const productos = [
    {
      id: 1,
      nombre: "Camisa Oxford",
      categoria: "Camisas",
      precio: 25.99,
      stock: 15,
      descripcion: "Camisa de algodón con botones, ideal para eventos casuales o formales.",
      estado: true
    },
    {
      id: 2,
      nombre: "Pantalón Chino",
      categoria: "Pantalones",
      precio: 39.50,
      stock: 20,
      descripcion: "Pantalón de corte recto con tela suave y resistente, estilo versátil.",
      estado: true
    },
    {
      id: 3,
      nombre: "Zapatillas Urbanas",
      categoria: "Calzado",
      precio: 59.90,
      stock: 10,
      descripcion: "Zapatillas cómodas y modernas para uso diario.",
      estado: true
    },
    {
      id: 4,
      nombre: "Campera de Jean",
      categoria: "Abrigos",
      precio: 74.25,
      stock: 8,
      descripcion: "Campera clásica de mezclilla, resistente al desgaste.",
      estado: true    
    },
    {
      id: 5,
      nombre: "Remera Estampada",
      categoria: "Remeras",
      precio: 19.99,
      stock: 30,
      descripcion: "Remera de algodón con estampado gráfico juvenil.",
      estado: true
    }
  ];

// Llamada a la funcion principal para iniciar el programa

main();


function main(){

    menu();
}

function menu() {

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
                agregarNuevoProducto();
                break;
            case 2:
                modificarListaProductos();
                break;  
            case 3:
                eliminarProducto();
                break;
            case 4: 
                verListaProductos();
                break;
            case 5:
                modificarPrecioProducto();
                break;
            case 6:
                modificarStockProducto();
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

/*Funcion para agregar un nuevo producto a la lista*/

function agregarNuevoProducto(){

    let nombre = prompt("Ingrese el nombre del producto");
    let categoria = prompt("Ingrese la categoria del producto");
    let precio = parseFloat(prompt("Ingrese el precio del producto"));
    let stock = parseInt(prompt("Ingrese el stock del producto"));
    let descripcion = prompt("Ingrese una descripcion del producto");

    const nuevoProducto = {
        id: productos.length + 1, 
        nombre: nombre,
        categoria: categoria,
        precio: precio,
        stock: stock,
        descripcion: descripcion,
        estado: true
    }

    productos.push(nuevoProducto);
    alert("Producto agregado correctamente");
}

/*Funcion para ver la lista de productos*/

function verListaProductos() {
    if (productos.length === 0) {
        alert("No hay productos en la lista.");
        return;
    }

    
    let lista = "Lista de productos:\n\n";
    console.log("Lista de productos:\n\n"); //Debido a la longitud de la lista, si se quiere ver completa se muestra por consola.

    productos.forEach(producto => {
        if(producto.estado === true){
        lista += `Id: ${producto.id} \nNombre: ${producto.nombre} \nCategoria: ${producto.categoria} \nPrecio: $${producto.precio.toFixed(2)} \nStock: ${producto.stock} \nDescripción: ${producto.descripcion}\n\n`;
        console.log(`Id: ${producto.id} \nNombre: ${producto.nombre} \nCategoria: ${producto.categoria} \nPrecio: $${producto.precio.toFixed(2)} \nStock: ${producto.stock} \nDescripción: ${producto.descripcion}\n\n`);
        }
    });

    alert(lista);
    alert("Lista de productos completa mostrada en la consola para ver detalles completos.");
}

/*Funcion para modificar informacion de un producto de la lista*/

function modificarListaProductos(){

    verListaProductos();
    let idProducto = prompt("Ingrese el ID del producto que desea modificar");
    idProducto = parseInt(idProducto);

    const producto = productos.find(p => p.id === idProducto);
    if (!producto) {
        alert("Producto no encontrado.");
        return;
    } 
        
    let nuevoNombre = prompt(`Ingrese el nuevo nombre del producto (actual: ${producto.nombre})`);
    let nuevaCategoria = prompt(`Ingrese la nueva categoria del producto (actual: ${producto.categoria})`);
    let nuevaDescripcion = prompt(`Ingrese una nueva descripcion del producto (actual: ${producto.descripcion})`);

    // Actualizar los campos del producto
    producto.nombre = nuevoNombre || producto.nombre;
    producto.categoria = nuevaCategoria || producto.categoria;
    producto.descripcion = nuevaDescripcion || producto.descripcion;

    alert("Producto modificado correctamente");
    
}

/* Funcion para eliminar un producto de la lista */

function eliminarProducto() {

    verListaProductos();
    let idProducto = prompt("Ingrese el ID del producto que desea eliminar");
    idProducto = parseInt(idProducto);

    const index = productos.findIndex(p => p.id === idProducto);
    if (index === -1) {
        alert("Producto no encontrado.");
        return;
    }

    productos[index].estado = false; // Cambiamos el estado a false en lugar de eliminarlo esto se hace para generar una baja logica y no perder el registro de los datos 
    alert("Producto eliminado correctamente");
}

/* Funcion para modificar el precio de un producto en especifico */

function modificarPrecioProducto() {
    verListaProductos();
    let idProducto = prompt("Ingrese el ID del producto que desea modificar");
    idProducto = parseInt(idProducto);

    const producto = productos.find(p => p.id === idProducto);
    if (!producto) {
        alert("Producto no encontrado.");
        return;
    } 

    let nuevoPrecio = parseFloat(prompt(`Ingrese el nuevo precio del producto (actual: $${producto.precio.toFixed(2)})`));

    // Actualizar el precio del producto
    producto.precio = nuevoPrecio || producto.precio;

    alert("Precio modificado correctamente");
}

/* Funcion para modificar el stock de un producto en especifico */

function modificarStockProducto() {
    verListaProductos();
    let idProducto = prompt("Ingrese el ID del producto que desea modificar");
    idProducto = parseInt(idProducto);

    const producto = productos.find(p => p.id === idProducto);
    if (!producto) {
        alert("Producto no encontrado.");
        return;
    } 

    let nuevoStock = parseInt(prompt(`Ingrese el nuevo stock del producto (actual: ${producto.stock})`));

    // Actualizar el stock del producto
    producto.stock = nuevoStock || producto.stock;

    alert("Stock modificado correctamente");
}

