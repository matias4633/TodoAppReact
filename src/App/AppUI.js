import React from "react";
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { TodoForm } from "../TodoForm/TodoForm";

import { Contexto } from '../TodoContext/TodoContext';
import { Modal } from "../Modal/Modal";


function AppUI() {
    const { error, loading, buscados, completarTodo, borrarTodo,openModal,setOpenModal , valorBusqueda } = React.useContext(Contexto);
    
    return (
        <React.Fragment> {/* Etiqueta invisible entre comillas. Es necesaria para contener al componente que devuelve */}

            <TodoCounter />


            <TodoSearch />


            <TodoList >
                {error && <p>Hubo un error..</p>}
                {loading && <p>Estamos cargando, no desesperes...</p>}
                {(!loading && !buscados.length && !valorBusqueda.length > 0) && <p>No hay recordatorios</p>}
                {!buscados.length && valorBusqueda.length > 0 && <p>No se encontraron resultados</p> }

                {buscados.map(objeto => {
                    return (<TodoItem
                        onCompletado={() => completarTodo(objeto.texto)}
                        onBorrar={() => borrarTodo(objeto.texto)}
                        key={objeto.texto}
                        valor={objeto}
                    />);
                    /* La key en necesaria para el proceso de react, para que
                    pueda identificar los componentes dentro de listas */
                    /* Poner () despues de la flecha es equivalente a poner return () */
                })}
            </TodoList>
            
            {openModal===true && <Modal><TodoForm/></Modal> }

            {!loading && <CreateTodoButton setOpenModal={setOpenModal} openModal={openModal}  />}

        </React.Fragment>
    );
}

export { AppUI };