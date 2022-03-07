//Archivo principal donde ejecuto el código

const process = require('process');
const { listarTareas, agregarTareas, filtrarPorEstado, eliminarTareasTerminadas, buscarPorEstado } = require('./tareas')
const colorcitos = require('colors')

let accion = process.argv[2].toLowerCase()

switch (accion) {

    case 'listar':
        listarTareas()
        break;


    case 'agregar':

        agregarTareas(process.argv[3], process.argv[4].toLowerCase()) // node app "agregar" (q es la acción que puse nueva) + el string de lo que quiero agregar // y también agregué que el usuario pueda poner el estado de su tarea manualmente... como hacerlo semi-automatico? pues no mi ciela, no me sale aún :P

        break;

    case "filtrar" :
                
        filtrarPorEstado(process.argv[3].toLocaleLowerCase());
               
        break;
        
    case "eliminar terminada" :

        eliminarTareasTerminadas()
        break; //agregué dos "terminadas" mas, para que pruebes el eliminar.

    case "buscar":
        
        buscarPorEstado(process.argv[3].toLowerCase())

        break; //acá poniendo node app "buscar" "terminada" (o la que sea, muestra esas tareas en cuetión)

    case undefined:

        console.log('Atención - tienes que pasar una acción'.bgMagenta);
        break;

    default:
        console.log('No entiendo que quieres hacer (ni con la programación ni con tu vida, hijx, jajaja)'.bgBlue);

}

// al poner por consola node app solo me tira "atencion tienes que pasar una acción" y resaltado para que se entienda
// al poner por consola node app "cosa" tira que no entiende que quieres hacer, tambien con color de error feo.

