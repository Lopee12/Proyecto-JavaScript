import * as Validaciones from "../../../Validaciones/Validaciones.js";

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

    let nombre, apellido, documento, salario = null;

    // Validar que los datos ingresados sean correctos

    while(true){
        nombre = Validaciones.pedirDatoString("Ingrese el nombre del empleado",Validaciones.validacionGeneralString);
        if(nombre == null){
            return;
        }   

        apellido = Validaciones.pedirDatoString("Ingrese el apellido del empleado",Validaciones.validacionGeneralString);
        if(apellido == null){
            return;
        }

        const existe = empleados.some(empleado => empleado.nombre.toLowerCase() === nombre.toLowerCase() && empleado.apellido.toLowerCase() === apellido.toLowerCase());
        if(existe){
            alert("El empleado ya existe en la lista. Por favor, ingrese un empleado diferente.");
            continue;
        }
    
        break;

    }

    // Validar el documento del empleado

    while(true){
        documento = Validaciones.pedirDatoEntero("Ingrese el documento del empleado", Validaciones.validacionGeneralEntero);
        if(documento == null){
            return;
        }

        const existeDocumento = empleados.some(empleado => empleado.documento === documento);
        if(existeDocumento){
            alert("El documento ya está registrado para otro empleado. Por favor, ingrese un documento diferente.");
            continue;
        }

        break;
    }

    // Validar el salario del empleado

    salario = Validaciones.pedirDatoFlotante("Ingrese el salario del empleado", Validaciones.validacionGeneralFlotante);
    if(salario == null) {
        return;
    }

    salario = parseFloat(salario);

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
            lista += `Id: ${producto.id} \nNombre: ${empleado.nombre} ${empleado.apellido} \nDocumento: ${empleado.documento} \nSalario: $${empleado.salario.toFixed(2)}\n\n`;
            console.log(`Id: ${producto.id} \nNombre: ${empleado.nombre} ${empleado.apellido} \nDocumento: ${empleado.documento} \nSalario: $${empleado.salario.toFixed(2)}\n\n`);
        }
    });


    alert(lista);
    alert("Lista de empleados completa mostrada en la consola para ver detalles completos.");
}

/*Funcion para modificar informacion de un empleado de la lista*/

export function modificarListaEmpleados() {
    verListaEmpleados();

    if (empleados.length === 0) {
        alert("No hay empleados en la lista para modificar.");
        return;
    }

    let idEmpleado = null;
    idEmpleado = Validaciones.pedirDatoEntero("Ingrese el ID del empleado que desea modificar", Validaciones.validacionGeneralEntero);
    if (idEmpleado === null) {
        return;
    }

    idEmpleado = parseInt(idEmpleado);

    const empleado = empleados.find(emp => emp.id === idEmpleado);

    if (!empleado) {
        alert("Empleado no encontrado");
        return;
    }

    let nuevoNombre, nuevoApellido, nuevoDocumento = null;

    // Validar que los datos ingresados sean correctos

    while (true) {
        nuevoNombre = Validaciones.pedirDatoString("Ingrese el nuevo nombre del empleado", Validaciones.validacionGeneralString);
        if (nuevoNombre == null) {
            return;
        }

        nuevoApellido = Validaciones.pedirDatoString("Ingrese el nuevo apellido del empleado", Validaciones.validacionGeneralString);
        if (nuevoApellido == null) {
            return;
        }

        const existe = empleados.some(emp => emp.id !== empleado.id && emp.nombre.toLowerCase() === nuevoNombre.toLowerCase() && emp.apellido.toLowerCase() === nuevoApellido.toLowerCase());
        if (existe) {
            alert("El empleado ya existe en la lista. Por favor, ingrese un empleado diferente.");
            continue;
        }
        break;
    }

    // Validar el documento del empleado

    while (true) {
        nuevoDocumento = Validaciones.pedirDatoEntero("Ingrese el nuevo documento del empleado", Validaciones.validacionGeneralEntero);
        if (nuevoDocumento == null) {
            return;
        }

        const existeDocumento = empleados.some(emp => emp.id !== empleado.id && emp.documento === nuevoDocumento);
        if (existeDocumento) {
            alert("El documento ya está registrado para otro empleado. Por favor, ingrese un documento diferente.");
            continue;
        }

        break;

    }

    empleado.nombre = nuevoNombre || empleado.nombre;
    empleado.apellido = nuevoApellido || empleado.apellido;
    empleado.documento = nuevoDocumento || empleado.documento;
    alert("Empleado modificado correctamente");

}

/*Funcion para eliminar un empleado de la lista*/

export function eliminarEmpleado() {
    verListaEmpleados();

    if (empleados.length === 0) {
        alert("No hay empleados en la lista para modificar.");
        return;
    }

    let idEmpleado = null;
    idEmpleado = Validaciones.pedirDatoEntero("Ingrese el ID del empleado que desea modificar", Validaciones.validacionGeneralEntero);
    if (idEmpleado === null) {
        return;
    }

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

    if (empleados.length === 0) {
        alert("No hay empleados en la lista para modificar.");
        return;
    }

    let idEmpleado = null;
    idEmpleado = Validaciones.pedirDatoEntero("Ingrese el ID del empleado que desea modificar", Validaciones.validacionGeneralEntero);
    if (idEmpleado === null) {
        return;
    }

    idEmpleado = parseInt(idEmpleado);

    const empleado = empleados.find(emp => emp.id === idEmpleado);

    if (!empleado) {
        alert("Empleado no encontrado");
        return;
    }

    // Validar el nuevo salario del empleado

    let nuevoSalario = null; 
    
    nuevoSalario = Validaciones.pedirDatoFlotante("Ingrese el nuevo salario del empleado", Validaciones.validacionGeneralFlotante);
    if (nuevoSalario === null) {
        return;
    }

    nuevoSalario = parseFloat(nuevoSalario);

    empleado.salario = nuevoSalario;
    alert("Salario modificado correctamente");
}


