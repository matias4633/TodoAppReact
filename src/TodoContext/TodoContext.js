import React from "react";
import {useLocalStorage} from './useLocalStorage'

const Contexto = React.createContext();


function Provider(props) {
    const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage('TODOS_V1', []); //Forma de renombrar variebles con los : lo que esta despues de los : es lo que se usa en App

    const [valorBusqueda, setValorBusqueda] = React.useState('');
    const [openModal,setOpenModal]=React.useState(false);


    const completados = todos.filter((x) => x.completo === true).length;
    const totalTodos = todos.length;

    let buscados = [];

    if (!valorBusqueda.length >= 1) {
        buscados = todos;
    } else {
        buscados = todos.filter(todo => {
            const todoText = todo.texto.toLowerCase();
            const textbuscado = valorBusqueda.toLowerCase();
            return todoText.includes(textbuscado); //condicion que usa filter para decidir si un objeto se va o se queda.
        });
    }

    const completarTodo = (text) => {
        const index = todos.findIndex(todo => todo.texto === text);
        const nuevosTodos = [...todos];

        nuevosTodos[index] = {
            texto: todos[index].texto,
            completo: !todos[index].completo
        }
        saveTodos(nuevosTodos);
    }

    const anadirTodo = (text) => {
        const nuevosTodos = [...todos];
        const nuevo={
            texto:text,
            completo:false
        }
        nuevosTodos.push(nuevo);
        saveTodos(nuevosTodos);
    }


    const borrarTodo = (text) => {
        const nuevosTodos = todos.filter((todo) => todo.texto !== text)
        saveTodos(nuevosTodos);
    }

    return (
        <Contexto.Provider value={{
            loading,
            error,
            totalTodos,
            completados,
            valorBusqueda,
            setValorBusqueda,
            buscados,
            completarTodo,
            borrarTodo,
            anadirTodo,
            openModal,
            setOpenModal
        }}>
            {props.children}
        </Contexto.Provider>
        );

}

export {Contexto,Provider};