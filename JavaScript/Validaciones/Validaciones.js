export function pedirDatoString(mensaje, validador) {
    while (true) {
        let valor = prompt(mensaje);
        const estado = validador(valor);

        switch (estado) {
            case "cancelado":
                alert("Operación cancelada.");
                return null;
            case "vacio":
                alert("El valor no puede estar vacío.");
                continue;
            case "numero":
                alert("El valor no puede ser un número.");
                continue;
            case "valido":
                return valor.trim(); // Devuelve el valor limpio si está todo OK
        }
    }
}

export function pedirDatoFlotante(mensaje, validador) {
    while (true) {
        let valor = prompt(mensaje);
        const estado = validador(valor);

        switch (estado) {
            case "cancelado":
                alert("Operación cancelada.");
                return null;
            case "vacio":
                alert("El valor no puede estar vacío.");
                continue;
            case "string":
                alert("El valor debe ser un número.");
                continue;
            case "negativo":
                alert("El valor no puede ser negativo.");
                continue;
            case "valido":
                return valor.trim(); // Devuelve el valor limpio si está todo OK
        }
    }
}

export function pedirDatoEntero(mensaje, validador) {
    while (true) {
        let valor = prompt(mensaje);
        const estado = validador(valor);

        switch (estado) {
            case "cancelado":
                alert("Operación cancelada.");
                return null;
            case "vacio":
                alert("El valor no puede estar vacío.");
                continue;
            case "string":
                alert("El valor debe ser un número.");
                continue;
            case "decimal":
                alert("El valor debe ser un número entero.");
                continue;
            case "negativo":
                alert("El valor no puede ser negativo.");
                continue;
            case "valido":
                return valor.trim(); // Devuelve el valor limpio si está todo OK
        }
    }
}

export function validacionGeneralString (valor){
    if(valor === null){
        return "Operacion cancelada";
    }

    if(valor.trim() === ""){
        return "El valor no puede estar vacío";
    }

    if (!isNaN(valor)){
        return "El valor debe poseer al menos un caracter no numérico";
    }

    return null;
}

export function validacionGeneralFlotante (valor){
    if(valor === null){
        return "cancelado";
    }

    if(valor.trim() === ""){
        return "vacio";
    }

    if (isNaN(valor)){
        return "string";
    }

    let numero = parseFloat(valor);

    if (numero < 0) {
        return "negativo";
    }

    return "valido";
}

export function validacionGeneralEntero (valor){
    if(valor === null){
        return "cancelado";
    }

    if(valor.trim() === ""){
        return "vacio";
    }

    if (isNaN(valor)){
        return "string";
    }

    let numero = Number(valor);

    if (!Number.isInteger(numero)) {
        return "decimal"; 
    }

    if (numero < 0) {
        return "negativo";
    }

    return "valido";
}