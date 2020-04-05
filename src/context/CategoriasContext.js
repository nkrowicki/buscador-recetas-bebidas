import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

//Crear el context

export const CategoriasContext = createContext();

//Crear el provider.
//El Provider es de donde van a salir los datos y las funciones 
//Provider es donde se encuentran las funciones y el state
const CategoriasProvider = (props) => {

    // Crear el state del context
    const [categorias, setCategorias] = useState([]);

    // Ejecutar el llamado a la api
    useEffect(() => {
        const obtenerCategorias = async () => {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`
            const categorias = await axios.get(url);

            setCategorias(categorias.data.drinks);

        }
        obtenerCategorias();

    }, [])

    return (

        <CategoriasContext.Provider
            value={{
                categorias
            }}
        >
            {props.children}
        </CategoriasContext.Provider>

    );

}

export default CategoriasProvider;