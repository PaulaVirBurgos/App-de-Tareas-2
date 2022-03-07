//Biblioteca de funcionalidades (módulos)

const fs = require('fs')
const tareas = require('./tareas.json');

const guardarJSON = (tareas)  => {

    fs.writeFileSync('./tareas.json',JSON.stringify(tareas,null,2));

    return null
}

const mostrarTareas = (arrTareas) => {

    arrTareas.forEach((tarea, index) => {

        return console.log(`${index + 1}` + `-Título `.magenta + `${tarea.titulo}` + ` Estado:`.cyan + `${tarea.estado}`)

    }) //Aplicando colorcitos en la terminal porque #lindi

    return null
}


const listarTareas = () => {

    mostrarTareas(tareas)
}

const agregarTareas = (textoAIngresar, textoEstado) => {

    let estadosPosibles = ["terminada", "en proceso", "pendiente"]

    if (!estadosPosibles.includes(textoEstado)) {

        return console.log("El estado que ingresaste no existe en este universo".bgRed, "Los valores posibles son terminada, en proceso, y pendiente :)".green); // agregué lo que pasaría si ponemos un estado que no tenemos en las opciones.

    }

    const nuevaTarea = {

        titulo: textoAIngresar,
        estado: textoEstado,
    }

    tareas.push(nuevaTarea);

    guardarJSON(tareas);

    return console.log("Tarea agregada correctamente".bgCyan);
}

const filtrarPorEstado = (estado) => {


    let estadosValidos = ['completado', 'en proceso', 'pendiente'];

    if (!estadosValidos.includes(estado)) {

        return console.log('Este estado no esssiste'.bgMagenta, "los estados válidos son:".bgRed, estadosValidos);
    }
    
    const tareasFiltradas = tareas.filter((elemento) => {
        
        return elemento.estado === estado
    })
    
    console.log("estas son las tareas encontradas".bgMagenta); 
    return mostrarTareas(tareasFiltradas)

}
const eliminarTareasTerminadas = () => {

    const arrEliminados = tareas.filter((elemento)=>{

        return elemento.estado !== "terminada"
    })
    console.log("Eliminaste las tareas terminadas, bien por vos".bgGreen);

    guardarJSON(arrEliminados); 
    mostrarTareas(arrEliminados);

    return null
} // acá, como no entendí bien de donde sale "new ID", preferí eliminar las tareas "terminadas" y un compa me ayudó a buscar la lógica. Hice dos lógicas, una super rebuscada que nos hizo reír, y esta que quedó mejor xD (la que puse en la app de notas finalmente). La rebuscada fue esta:

/*const buscarPorEstado = (estado1, estado2) => {

    let arrayConEstados = tareas.filter((elemento)=>{

        if (elemento.estado === estado1) {

            return true

            
        } else  if (elemento.estado === estado2){

            return true
            
        }else {
            return false
        }
    })    
   
   mostrarTareas(arrayConEstados); 
   return console.log("Estas son las tareas que buscaste, wey".bgRed);
}
jajajjaja... cuando me di cuenta que si hacía esto iba a tener que cambiar practicamente todo el código dije, ok no. Aún no sé tanto
*/

const buscarPorEstado = (estado) => {

    let arrayConEstados = tareas.filter((elemento)=>{

        return elemento.estado === estado
        
    })    
   
   mostrarTareas(arrayConEstados); 
   return console.log("Estas son las tareas que buscaste".bgRed);
}

module.exports = {

    listarTareas, agregarTareas, filtrarPorEstado, eliminarTareasTerminadas, buscarPorEstado

}