import React from "react";
import { Contexto } from "../TodoContext/TodoContext";
import './TodoForm.css'

function TodoForm() {
    const {anadirTodo,setOpenModal}=React.useContext(Contexto);
    const [newTodoValue,setNewTodoValue]=React.useState('');
    
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
    return (
        <form onSubmit={onCrear}>
            <label className="titulo">Escribe un nuevo TODO</label>
            <textarea placeholder="Comprar el cemento.." onChange={newValue} className="texto"></textarea>

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