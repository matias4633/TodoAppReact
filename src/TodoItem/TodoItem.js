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

    return (
        <li>
            <span
                onClick={objeto.onCompletado} /* Para poder mandar parametros de debe envolver en una arrow function. */
                className={`complete ${ (objeto.valor.completo) ? 'completed' :''}`}
            >C
            </span>
            <p className={`texto ${ (objeto.valor.completo) ? 'textotachado' : ''}`}>{objeto.valor.texto}</p>
            <span className="eliminar" onClick={objeto.onBorrar}>X</span>
        </li>
    );
}
export {TodoItem};

