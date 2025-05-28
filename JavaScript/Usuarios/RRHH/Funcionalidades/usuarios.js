export const usuarios = [
    {
        id: 1,
        nombreUsuario: "admin1",
        contrasena: "admin123",
        estado: true,
        sector: "admin"
    },
    {
        id: 2,
        nombreUsuario: "rrhh1",
        contrasena: "rrhh123",
        estado: true,
        sector: "rrhh"
    },
    {
        id: 3,
        nombreUsuario: "admin2",
        contrasena: "admin456",
        estado: true,
        sector: "admin"
    },
    {
        id: 4,
        nombreUsuario: "rrhh2",
        contrasena: "rrhh456",
        estado: false,
        sector: "rrhh"
    },
    {
        id: 5,
        nombreUsuario: "admin3",
        contrasena: "admin789",
        estado: true,
        sector: "admin"
    }
];

/*Funcion para agregar un nuevo usuario a la lista*/

export function agregarNuevoUsuario() {
    let nombreUsuario = prompt("Ingrese el nombre de usuario");
    let contrasena = prompt("Ingrese la contraseña del usuario");
    let sector = prompt("Ingrese el sector del usuario (admin/rrhh)");

    const nuevoUsuario = {
        id: usuarios.length + 1, // Asignar un ID único basado en la longitud del arreglo
        nombreUsuario: nombreUsuario,
        contrasena: contrasena,
        estado: true,
        sector: sector
    };

    usuarios.push(nuevoUsuario);
    alert("Usuario agregado exitosamente.");
}       

/*Funcion para ver la lista de usuarios*/

export function verListaUsuarios() {
    if (usuarios.length === 0) {
        alert("No hay usuarios en la lista.");
        return;
    }

    let lista = "Lista de usuarios:\n\n";
    console.log("Lista de usuarios:\n\n"); // Mostrar la lista por consola para ver detalles completos.

    usuarios.forEach(usuario => {
        lista += `ID: ${usuario.id} \nNombre de Usuario: ${usuario.nombreUsuario} \nEstado: ${usuario.estado ? "Activo" : "Inactivo"} \nSector: ${usuario.sector}\n\n`;
        console.log(`ID: ${usuario.id} \nNombre de Usuario: ${usuario.nombreUsuario} \nEstado: ${usuario.estado ? "Activo" : "Inactivo"} \nSector: ${usuario.sector}\n\n`);
    });

    alert(lista);
}

/*Funcion para modificar informacion de un usuario de la lista*/

export function modificarUsuario() {
    verListaUsuarios();
    let idUsuario = prompt("Ingrese el ID del usuario que desea modificar");
    idUsuario = parseInt(idUsuario);

    const usuario = usuarios.find(u => u.id === idUsuario);
    if (!usuario) {
        alert("Usuario no encontrado.");
        return;
    }

    let nuevoNombreUsuario = prompt("Ingrese el nuevo nombre de usuario", usuario.nombreUsuario);
    let nuevaContrasena = prompt("Ingrese la nueva contraseña", usuario.contrasena);
    let nuevoSector = prompt("Ingrese el nuevo sector (admin/rrhh)", usuario.sector);

    usuario.nombreUsuario = nuevoNombreUsuario || usuario.nombreUsuario;
    usuario.contrasena = nuevaContrasena || usuario.contrasena;
    usuario.sector = nuevoSector || usuario.sector;

    alert("Usuario modificado exitosamente.");
}

/*Funcion para eliminar un usuario de la lista*/

export function eliminarUsuario() {
    verListaUsuarios();
    let idUsuario = prompt("Ingrese el ID del usuario que desea eliminar");
    idUsuario = parseInt(idUsuario);

    const usuarioIndex = usuarios.findIndex(u => u.id === idUsuario);
    if (usuarioIndex === -1) {
        alert("Usuario no encontrado.");
        return;
    }

    usuarios[usuarioIndex].estado = false; // Cambiar el estado a false en lugar de eliminarlo
    alert("Usuario eliminado exitosamente.");
}

