import React, { useContext } from 'react';
import {ProveedorBusqueda} from '../proveedor/ProveedorBusqueda';
import Lecciones from './Lecciones';
import '../assets/css/categoriaCargada.css';

const CategoriaCargada = () => {
    const [busqueda] = useContext(ProveedorBusqueda);

    return(
        <div className='categoriaCargada'>

            <h1 className='titulo_categoria'>{ busqueda.categoriaSeleccionada ? busqueda.categoriaSeleccionada[0][0].tag : null }</h1>

            {   
                busqueda.categoriaSeleccionada ?
                busqueda.categoriaSeleccionada.map( (lista) => {
                    let lecciones =  Object.values(lista)
                    return <Lecciones key={lista[0].key} lecciones={lecciones} />
                })
                : null
            }

            {
                busqueda.categoriaSeleccionada === null ?
                <React.Fragment>
                    <h1 className='titulo_categoria'>Esta categoría aún no tiene contenido</h1>
                    <hr className='linea_lecciones'/> 
                    <p className='currantes'>En innovamat estamos trabajando para ofrecerte el mejor servicio.</p>
                </React.Fragment>                
                : null
            }

        </div>
    )
}

export default CategoriaCargada;