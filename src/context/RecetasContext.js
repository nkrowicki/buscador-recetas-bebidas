import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const RecetasContext = createContext();

const RecetasProvider = (props) => {

    const [recetas, setRecetas] = useState([]);

    const [busquedaRecetas, setBusquedaRecetas] = useState({
        nombre: '',
        categoria: ''
    });

    const [consultar, setConsultar] = useState(false);

    const { nombre, categoria } = busquedaRecetas;

    useEffect(() => {

        if (consultar) {

            const obtenerRecetas = async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`
                const resultado = await axios(url);

                setRecetas(resultado.data.drinks);
                console.log(resultado);

            }

            obtenerRecetas();
        }


    }, [busquedaRecetas])

    return (<RecetasContext.Provider
        value={{
            recetas,
            setBusquedaRecetas,
            setConsultar
        }
        }
    >
        {props.children}
    </RecetasContext.Provider>);
}

export default RecetasProvider;