import React, { useContext, useState } from 'react';
import { CategoriasContext } from '../context/CategoriasContext';
import { RecetasContext } from '../context/RecetasContext';

const Formulario = () => {

    const { categorias } = useContext(CategoriasContext);
    const { setBusquedaRecetas, setConsultar } = useContext(RecetasContext);

    const [error, setError] = useState(false);

    const [busqueda, setBusqueda] = useState({
        nombre: '',
        categoria: ''
    });

    // Funcion para leer los contenidos
    const obtenerDatosReceta = e => {

        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        });

    }

    return (
        <form
            className="col-12"
            onSubmit={e => {
                e.preventDefault();
                setBusquedaRecetas(busqueda);
                setConsultar(true);
            }}
        >
            <fieldset>
                <legend> Busca bebidas por categoria o ingrediente</legend>

            </fieldset>
            <div className="row mt-4">
                <div className="col-md-4">
                    <input
                        name="nombre"
                        className="form-control"
                        type="text"
                        placeholder="Buscar por ingrediente"
                        onChange={obtenerDatosReceta}
                    />
                </div>
                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="categoria"
                        onChange={obtenerDatosReceta}

                    >
                        <option value="">--- Selecciona categoria ---</option>
                        {categorias.map((categoria) => (
                            <option
                                key={categoria.strCategory}
                                value={categoria.strCategory}>
                                {categoria.strCategory}
                            </option>
                        ))}

                    </select>
                </div>

                <div className="col-md-4">
                    <input
                        type="submit"
                        className="btn btn-block btn-primary"
                        value="Buscar Bebidas"
                    />
                </div>

            </div>


        </form>
    );
}

export default Formulario;