import React from "react";
import './TodoCounter.css';
import { Contexto } from '../TodoContext/TodoContext';

function TodoCounter() {
    const { totalTodos, completados } = React.useContext(Contexto);
    let logo=require('../images/logo.png');
    
    return (
        <div className="contendor-logo-counter">
            <img src={logo} alt="logo" className="logo"></img>
            { !(totalTodos === 0) && <h2 className="subtitulo">Completaste {completados} de {totalTodos} pendientes</h2>}
            { totalTodos === 0 && <h2 className="subtitulo" >Te ayudare a recordar!</h2> }
        </div>

    );
}

/* export default TodoCounter; */ /* import patito from './TodoCounter'; */
/* Esta opcion me permite que al hacer el inport pueda ponerle el nombre que quiera */
export { TodoCounter };  /* import {TodoCounter} from './TodoCounter'; */
/* Esta me obliga a usar el nombre exacto del componente en el import. */