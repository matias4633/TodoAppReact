import React from "react";
import './TodoCounter.css';
import {Contexto} from '../TodoContext/TodoContext';

function TodoCounter(){
    const {totalTodos,completados}=React.useContext(Contexto);
    return (
        <h2 className="subtitulo">Has completado {completados} de {totalTodos} TODOs</h2>
    );
}

/* export default TodoCounter; */ /* import patito from './TodoCounter'; */
/* Esta opcion me permite que al hacer el inport pueda ponerle el nombre que quiera */
export {TodoCounter};  /* import {TodoCounter} from './TodoCounter'; */
/* Esta me obliga a usar el nombre exacto del componente en el import. */