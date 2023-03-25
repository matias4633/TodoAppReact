import React from "react";
import './TodoSearch.css';
import {Contexto} from '../TodoContext/TodoContext';

function TodoSearch(){ //Forma de recibir parametros.
    
   // const [estado,setEstado] = React.useState('Matias'); //Creacion de estado en react. Este devuelve un array de 2 Posiciones.
    //la primera en nombre de la variable, la segunda la funcion que se usa para cambiar el estado. recibe el valor inicial

    //const [valorBusqueda,setValorBusqueda] = React.useState('Matias');
    
    const {setValorBusqueda , totalTodos }=React.useContext(Contexto);

    const buscar = (event) =>{
        setValorBusqueda(event.target.value);
    } 
    let placeHolder = totalTodos ? 'Encuentra tu recordatorio' : 'Crea tu primer pendiente!';
    return [
        <div className="contenedor">
            <input
                onChange={buscar}
                placeholder={placeHolder}
            ></input>
        </div>
        /* ,
        <p>{valorBusqueda}</p> */
        
    ]; //El return puede devolver un array de elementos.
}
export {TodoSearch};