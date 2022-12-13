import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton({setOpenModal,openModal}){
    const NuevaTarea= () => {
        setOpenModal(!openModal);
    }
    return (
        <button 
            onClick={NuevaTarea}
            className="boton"
        >+
        </button>
    );
}
export {CreateTodoButton};