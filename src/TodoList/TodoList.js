import React from "react";
import './TodoList.css';

function TodoList(objeto){
    return (
        <section>
            <ul>
                {objeto.children}
            </ul>
        </section>
    );
}
export {TodoList};
