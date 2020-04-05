import React, { useEffect, createContext, useState } from 'react';
import axios from 'axios';

//Crear el context

export const ModalContext = createContext();



const ModalProvider = (props) => {

    //Crear el state  del provider
    const [idReceta, setIdReceta] = useState(null);
    const [infoReceta, setReceta] = useState({})

    //Cuando tenemos una receta.. llamar a la api
    useEffect(() => {
        const obtenerReceta = async () => {

            if (!idReceta) return null;

            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`
            const resultado = await axios(url);
            setReceta(resultado.data.drinks[0]);
        }
        obtenerReceta();
    }, [idReceta])


    return (
        <ModalContext.Provider
            value={{
                infoReceta, 
                setIdReceta,
                setReceta
            }
            }
        >
            {props.children}
        </ModalContext.Provider>
    );
}

export default ModalProvider
