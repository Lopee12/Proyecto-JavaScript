// import * as FuncionesEmpleados from './Funcionalidades/empleados.js';
// import * as FuncionesUsuarios from './Funcionalidades/usuarios.js';

// /*Menu de Recursos Humanos*/
// /* Este menu es el que se le presenta al usuario de recursos humanos para que pueda gestionar los usuarios y empleados de la empresa */

// export function menuRecursosHumanos() {

//     let flag = true;

//     while(flag){

//         let opcion = prompt("Seleccione una opción:\n1. Agregar nuevo usuario\n2. Ver lista de usuarios\n3. Modificar usuario\n4. Eliminar usuario\n5. Agregar nuevo empleado\n6. Ver lista de empleados\n7. Modificar informaacion empleado\n8. Eliminar empleado\n9. Modificar salario empleado\n10. Salir del menú de Recursos Humanos");
        
//         // Si el usuario presiona Cancelar, opcion será null

//         if (opcion === null) {
//             alert("Saliendo del programa...");
//             break;
//         }
          
//         opcion = parseInt(opcion);
        
//         switch(opcion){
//             case 1:
//                 FuncionesUsuarios.agregarNuevoUsuario();
//                 break;
//             case 2:
//                 FuncionesUsuarios.verListaUsuarios();
//                 break;
//             case 3:
//                 FuncionesUsuarios.modificarUsuario();
//                 break;
//             case 4:
//                 FuncionesUsuarios.eliminarUsuario();
//                 break;
//             case 5:
//                 FuncionesEmpleados.agregarNuevoEmpleado();
//                 break;
//             case 6:
//                 FuncionesEmpleados.verListaEmpleados();
//                 break;
//             case 7:
//                 FuncionesEmpleados.modificarListaEmpleados();
//                 break;
//             case 8:
//                 FuncionesEmpleados.eliminarEmpleado();
//                 break;
//             case 9:
//                 FuncionesEmpleados.modificarSalarioEmpleado();
//                 break;
//             case 10:
//                 flag = false;
//                 alert("Saliendo del menú de Recursos Humanos.");
//                 break;
//             default:
//                 alert("Opción no válida. Intente nuevamente.");
//         }
//     }
// }
