// import * as Validaciones from "../../../Validaciones/Validaciones.js"

// export const usuarios = [
//     {
//         id: 1,
//         nombreUsuario: "admin1",
//         contrasena: "admin123",
//         estado: true,
//         sector: "admin"
//     },
//     {
//         id: 2,
//         nombreUsuario: "rrhh1",
//         contrasena: "rrhh123",
//         estado: true,
//         sector: "rrhh"
//     },
//     {
//         id: 3,
//         nombreUsuario: "admin2",
//         contrasena: "admin456",
//         estado: true,
//         sector: "admin"
//     },
//     {
//         id: 4,
//         nombreUsuario: "rrhh2",
//         contrasena: "rrhh456",
//         estado: false,
//         sector: "rrhh"
//     },
//     {
//         id: 5,
//         nombreUsuario: "admin3",
//         contrasena: "admin789",
//         estado: true,
//         sector: "admin"
//     }
// ];

// // /*Funcion para agregar un nuevo usuario a la lista*/

// export function agregarNuevoUsuario() {

//     let nombreUsuario, contrasena, sector = null;

//     //Validamos el nombre de usuario

//     while(true){

//         nombreUsuario = Validaciones.pedirDatoString("Ingrese el nombre de usuario", Validaciones.validacionGeneralString);
//         if(nombreUsuario == null){
//             return;
//         }

//         //Verificar si el nombre de usuario ya existe en la lista de usuarios

//         const existe = usuarios.some(usuario => usuario.nombreUsuario.toLowerCase() === nombreUsuario.toLowerCase());
//         if(existe){
//             alert("El nombre de usuario ya existe en la lista. Por favor, ingrese un nombre diferente.")
//             continue;
//         }
//         break;
//     }

//     //Validamos la contrasena  

//     while(true){
//         contrasena = prompt("Ingrese la contraseña del usuario"); 
//         if(contrasena === null){
//             alert("Operación cancelada. No se agregará el usuario.");
//             return; // Si el usuario cancela la entrada, salimos de la función
//         }   

//         if(contrasena.trim() === ""){
//             alert("La contraseña no puede estar vacía. Por favor, ingrese una contraseña válida.");
//             continue; // Volver a pedir la contraseña
//         }

//         // Verificar si la contraseña tiene al menos 6 caracteres
//         if(contrasena.length < 6){
//             alert("La contraseña debe tener al menos 6 caracteres. Por favor, ingrese una contraseña válida.");
//             continue; // Volver a pedir la contraseña
//         }

//         break;
//     }

//     //Validamos el sector del usuario 

//     while(true){

//         sector = Validaciones.pedirDatoString("Ingrese el sector del usuario (admin/rrhh)", Validaciones.validacionGeneralString);
//         if(sector === null){
//             return;
//         }

//         // Verificar si el sector es válido
//         if(sector.toLowerCase() !== "admin" && sector.toLowerCase() !== "rrhh") {
//             alert("El sector debe ser 'admin' o 'rrhh'. Por favor, ingrese un sector válido.");
//             continue; // Volver a pedir el sector
//         }
//         break; // Salir del bucle si el sector es válido
//     }

//     const nuevoUsuario = {
//         id: usuarios.length + 1, // Asignar un ID único basado en la longitud del arreglo
//         nombreUsuario: nombreUsuario,
//         contrasena: contrasena,
//         estado: true,
//         sector: sector
//     };

//     usuarios.push(nuevoUsuario);
//     alert("Usuario agregado exitosamente.");
// }       

// /*Funcion para ver la lista de usuarios*/

// export function verListaUsuarios() {
//     if (usuarios.length === 0) {
//         alert("No hay usuarios en la lista.");
//         return;
//     }

//     let lista = "Lista de usuarios:\n\n";
//     console.log("Lista de usuarios:\n\n"); // Mostrar la lista por consola para ver detalles completos.

//     usuarios.forEach(usuario => {
//         lista += `ID: ${usuario.id} \nNombre de Usuario: ${usuario.nombreUsuario} \nEstado: ${usuario.estado ? "Activo" : "Inactivo"} \nSector: ${usuario.sector}\n\n`;
//         console.log(`ID: ${usuario.id} \nNombre de Usuario: ${usuario.nombreUsuario} \nEstado: ${usuario.estado ? "Activo" : "Inactivo"} \nSector: ${usuario.sector}\n\n`);
//     });

//     alert(lista);
// }

// /*Funcion para modificar informacion de un usuario de la lista*/

// export function modificarUsuario() {
//     verListaUsuarios();

//     if (usuarios.length === 0) {
//         alert("No hay usuarios en la lista para eliminar.");
//         return;
//     }

//     let idUsuario = null;

//     idUsuario =  Validaciones.pedirDatoEntero("Ingrese el ID del usuario que desea modificar", Validaciones.validacionGeneralEntero);
//     if (idUsuario === null) {
//         return; // Si el usuario cancela la entrada, salimos de la función
//     }
    
//     idUsuario = parseInt(idUsuario);

//     const usuario = usuarios.find(u => u.id === idUsuario);
//     if (!usuario) {
//         alert("Usuario no encontrado.");
//         return;
//     }

//     // Pedimos los nuevos datos del usuario, permitiendo que se mantengan los valores actuales si el usuario no ingresa nada

//     let nuevoNombreUsuario , nuevaContrasena, nuevoSector = null;

//     while(true) {
//         nuevoNombreUsuario = Validaciones.pedirDatoString("Ingrese el nuevo nombre de usuario", Validaciones.validacionGeneralString);  
//         if (nuevoNombreUsuario === null) {
//             return; // Si el usuario cancela la entrada, salimos de la función
//         }

//         // Verificar si el nuevo nombre de usuario ya existe en la lista de usuarios

//         const existe = usuarios.some(u => u.nombreUsuario.toLowerCase() === nuevoNombreUsuario.toLowerCase() && u.id !== idUsuario);
//         if (existe) {
//             alert("El nombre de usuario ya existe en la lista. Por favor, ingrese un nombre diferente.");
//             continue; // Volver a pedir el nombre de usuario
//         }
//         break; // Salir del bucle si el nombre de usuario es válido
//     }

//     // Pedimos la nueva contraseña y el nuevo sector, permitiendo que se mantengan los valores actuales si el usuario no ingresa nada

//     while(true) {
//         nuevaContrasena = prompt("Ingrese la nueva contraseña", usuario.contrasena);
//         if (nuevaContrasena === null) {
//             alert("Operación cancelada. No se modificará la contraseña.");
//             return; // Si el usuario cancela la entrada, salimos de la función
//         }

//         if (nuevaContrasena.trim() === "") {
//             alert("La contraseña no puede estar vacía. Por favor, ingrese una contraseña válida.");
//             continue; // Volver a pedir la contraseña
//         }

//         // Verificar si la nueva contraseña tiene al menos 6 caracteres

//         if (nuevaContrasena.length < 6) {
//             alert("La contraseña debe tener al menos 6 caracteres. Por favor, ingrese una contraseña válida.");
//             continue; // Volver a pedir la contraseña
//         }

//         break; // Salir del bucle si la contraseña es válida
//     }

//     while(true){

//         nuevoSector = Validaciones.pedirDatoString("Ingrese el sector del usuario (admin/rrhh)", Validaciones.validacionGeneralString);
//         if(nuevoSector === null){
//             return;
//         }

//         // Verificar si el sector es válido
//         if(nuevoSector.toLowerCase() !== "admin" && nuevoSector.toLowerCase() !== "rrhh") {
//             alert("El sector debe ser 'admin' o 'rrhh'. Por favor, ingrese un sector válido.");
//             continue; // Volver a pedir el sector
//         }
//         break; // Salir del bucle si el sector es válido
//     }

//     // Actualizar los datos del usuari

//     usuario.nombreUsuario = nuevoNombreUsuario || usuario.nombreUsuario;
//     usuario.contrasena = nuevaContrasena || usuario.contrasena;
//     usuario.sector = nuevoSector || usuario.sector;

//     alert("Usuario modificado exitosamente.");
// }

// /*Funcion para eliminar un usuario de la lista*/

// export function eliminarUsuario() {
//     verListaUsuarios();

//     if (usuarios.length === 0) {
//         alert("No hay usuarios en la lista para eliminar.");
//         return;
//     }
    
//     let idUsuario = null;

//     idUsuario =  Validaciones.pedirDatoEntero("Ingrese el ID del usuario que desea modificar", Validaciones.validacionGeneralEntero);
//     if (idUsuario === null) {
//         return; // Si el usuario cancela la entrada, salimos de la función
//     }

//     idUsuario = parseInt(idUsuario);

//     const usuarioIndex = usuarios.findIndex(u => u.id === idUsuario);
//     if (usuarioIndex === -1) {
//         alert("Usuario no encontrado.");
//         return;
//     }

//     usuarios[usuarioIndex].estado = false; // Cambiar el estado a false en lugar de eliminarlo
//     alert("Usuario eliminado exitosamente.");
// }

