import React from "react";
import './TodoItem.css';

function TodoItem(objeto){
    
    /* function eliminarTarea(text){
        console.log('Eliminaste la tarea : '+text);
        
    }
 */
    /* function completarTarea(text){
        console.log('Eliminaste la tarea : '+text);
    } */
    /* const completarTarea=(text) => {
        console.log('Completaste la tarea : '+text); //Dos formas de declarar funciones.
    } */
    let eliminar=require('../images/borrar.png');
    return (
        <li>
            <span
                onClick={objeto.onCompletado} /* Para poder mandar parametros de debe envolver en una arrow function. */
                className={`complete ${ (objeto.valor.completo) ? 'completed' :''}`}
            >✓
            </span>
            <p className={`texto ${ (objeto.valor.completo) ? 'textotachado' : ''}`}>{objeto.valor.texto}</p>
            <img src={eliminar} className="eliminar" onClick={objeto.onBorrar} alt="Icono para la accion de borrar"/>
        </li>
    );
}
export {TodoItem};

