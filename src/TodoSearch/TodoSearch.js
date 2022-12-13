import React from "react";
import './TodoSearch.css';
import {Contexto} from '../TodoContext/TodoContext';

function TodoSearch(){ //Forma de recibir parametros.
    
   // const [estado,setEstado] = React.useState('Matias'); //Creacion de estado en react. Este devuelve un array de 2 Posiciones.
    //la primera en nombre de la variable, la segunda la funcion que se usa para cambiar el estado. recibe el valor inicial

    //const [valorBusqueda,setValorBusqueda] = React.useState('Matias');
    
    const {setValorBusqueda}=React.useContext(Contexto);

    const buscar = (event) =>{
        setValorBusqueda(event.target.value);
    } 
    
    return [
        <div className="contenedor">
            <input
                onChange={buscar}
                placeholder="Ladrillo"
            ></input>
        </div>
        /* ,
        <p>{valorBusqueda}</p> */
        
    ]; //El return puede devolver un array de elementos.
}
export {TodoSearch};