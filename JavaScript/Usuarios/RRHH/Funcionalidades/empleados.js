/*Arreglo de empleados con sus datos*/

export const empleados = [
    {
        id: 1,
        nombre: "Juan",
        apellido: "Pérez",
        documento: "12345678",
        salario: 50000,
        estado: true
    },
    {
        id: 2,
        nombre: "María",
        apellido: "Gómez",
        documento: "23456789",
        salario: 55000,
        estado: true
    },
    {
        id: 3,
        nombre: "Carlos",
        apellido: "López",
        documento: "34567890",
        salario: 52000,
        estado: true
    },
    {
        id: 4,
        nombre: "Ana",
        apellido: "Martínez",
        documento: "45678901",
        salario: 58000,
        estado: true
    },
    {
        id: 5,
        nombre: "Luis",
        apellido: "Rodríguez",
        documento: "56789012",
        salario: 51000,
        estado: true
    }
];
/*Funcion para agregar un nuevo empleado a la lista*/

export function agregarNuevoEmpleado() {
    let nombre = prompt("Ingrese el nombre del empleado");
    let apellido = prompt("Ingrese el apellido del empleado");
    let documento = prompt("Ingrese el documento del empleado");
    let salario = parseFloat(prompt("Ingrese el salario del empleado"));

    const nuevoEmpleado = {
        id: empleados.length + 1, // Asignar un ID único basado en la longitud del arreglo
        nombre: nombre,
        apellido: apellido,
        documento: documento,
        salario: salario,
        estado: true
    };

    empleados.push(nuevoEmpleado);
    alert("Empleado agregado correctamente");
}

/*Funcion para ver la lista de empleados*/

export function verListaEmpleados() {
    if (empleados.length === 0) {
        alert("No hay empleados en la lista.");
        return;
    }

    let lista = "Lista de empleados:\n\n";
    console.log("Lista de empleados:\n\n"); //Debido a la longitud de la lista, si se quiere ver completa se muestra por consola.

    empleados.forEach(empleado => {
        if (empleado.estado === true) {
            lista += `Nombre: ${empleado.nombre} ${empleado.apellido} \nDocumento: ${empleado.documento} \nSalario: $${empleado.salario.toFixed(2)}\n\n`;
            console.log(`Nombre: ${empleado.nombre} ${empleado.apellido} \nDocumento: ${empleado.documento} \nSalario: $${empleado.salario.toFixed(2)}\n\n`);
        }
    });

    alert(lista);
    alert("Lista de empleados completa mostrada en la consola para ver detalles completos.");
}

/*Funcion para modificar informacion de un empleado de la lista*/

export function modificarListaEmpleados() {
    verListaEmpleados();
    let idEmpleado = prompt("Ingrese el ID del empleado que desea modificar");
    idEmpleado = parseInt(idEmpleado);

    const empleado = empleados.find(emp => emp.id === idEmpleado);

    if (!empleado) {
        alert("Empleado no encontrado");
        return;
    }

    let nuevoNombre = prompt("Ingrese el nuevo nombre del empleado", empleado.nombre);
    let nuevoApellido = prompt("Ingrese el nuevo apellido del empleado", empleado.apellido);
    let nuevoDocumento = prompt("Ingrese el nuevo documento del empleado", empleado.documento);

    

    empleado.nombre = nuevoNombre || empleado.nombre;
    empleado.apellido = nuevoApellido || empleado.apellido;
    empleado.documento = nuevoDocumento || empleado.documento;
    alert("Empleado modificado correctamente");

}

/*Funcion para eliminar un empleado de la lista*/

export function eliminarEmpleado() {
    verListaEmpleados();
    let idEmpleado = prompt("Ingrese el ID del empleado que desea eliminar");
    idEmpleado = parseInt(idEmpleado);

    const empleado = empleados.find(emp => emp.id === idEmpleado);

    if (!empleado) {
        alert("Empleado no encontrado");
        return;
    }

    empleado.estado = false; // Cambiar el estado a false en lugar de eliminarlo en caso de que se quiera recuperar la informacion mas adelante
    alert("Empleado eliminado correctamente");
}

/*Funcion para modificar el salario de un empleado*/

export function modificarSalarioEmpleado() {
    verListaEmpleados();
    let idEmpleado = prompt("Ingrese el ID del empleado cuyo salario desea modificar");
    idEmpleado = parseInt(idEmpleado);

    const empleado = empleados.find(emp => emp.id === idEmpleado);

    if (!empleado) {
        alert("Empleado no encontrado");
        return;
    }

    let nuevoSalario = parseFloat(prompt("Ingrese el nuevo salario del empleado", empleado.salario));

    if (isNaN(nuevoSalario) || nuevoSalario <= 0) {
        alert("Salario inválido");
        return;
    }

    empleado.salario = nuevoSalario;
    alert("Salario modificado correctamente");
}

