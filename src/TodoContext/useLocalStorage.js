import React from "react";

function useLocalStorage(itemName, valorInicial) { //Creaccion de un Custom HOOK
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [item, setItem] = React.useState(valorInicial);

    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageTodos = localStorage.getItem(itemName);

                let parsedTodos;

                if (!localStorageTodos) {
                    localStorage.setItem(itemName, JSON.stringify(valorInicial));
                    parsedTodos = valorInicial;
                } else {
                    parsedTodos = JSON.parse(localStorageTodos);
                }

                setItem(parsedTodos);
                setLoading(false);
            } catch (error) {
                setError(error);
            }


        }, 3000);
    });

    const saveItem = (newItem) => {
        try {
            const stringItem = JSON.stringify(newItem);
            localStorage.setItem(itemName, stringItem);
            setItem(newItem);
        } catch (error) {
            setError(error);
        }

    }

    return { item, saveItem, loading, error }; //por convencion de react, cuando tenga que mandar mas de 2 se usa un objeto para mandarlo en vez de un array.
}

export {useLocalStorage};