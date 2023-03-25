import React, { useEffect } from "react";
import { Contexto } from "../TodoContext/TodoContext";
import './TodoForm.css'

const textos=[
    'Ir al supermercado',
    'Llevar al perro a pasear',
    'Comprar los libros'
]

function TodoForm() {
    const {anadirTodo,setOpenModal}=React.useContext(Contexto);
    const [newTodoValue,setNewTodoValue]=React.useState('');
    const [frase,setFrase] = React.useState('');
    
    const onCancelar = () => {
        setOpenModal(false);
    };
    const onCrear = (event) => {
        event.preventDefault(); //Evitar la recarga automatica que provoca el evento.
        if(newTodoValue.trim() !== ''){
            anadirTodo(newTodoValue);
        }
        setOpenModal(false);
    };
    const newValue=(event)=>{
        setNewTodoValue(event.target.value);
    }
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
         
    useEffect(()=>{
         setFrase(textos[getRandomInt(textos.length)]);
     },[]);
    return (
        <form onSubmit={onCrear}>
            <label className="titulo">Escribe un nuevo Recordatorio</label>
            <textarea placeholder={frase} onChange={newValue} className="texto" maxLength={60}></textarea>

            <div className="contenedor-botones">
                <button onClick={onCancelar} className="boton-cancelar boton-form">
                    Cancelar
                </button>
                <button type="submit" className="boton-anadir boton-form">
                    Añadir
                </button>
            </div>

        </form>);
}
export { TodoForm };