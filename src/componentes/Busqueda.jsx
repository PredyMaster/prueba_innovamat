import React, {useState, useContext} from 'react';
import {ProveedorBusqueda} from '../proveedor/ProveedorBusqueda';
import Leccion from './Leccion';
import BuscaLeccionPost from '../logica/BuscaLeccionPost';
import '../assets/css/busqueda.css';

const Busqueda = () => {
    const [busqueda] = useContext(ProveedorBusqueda);
    const [busquedaAPI, setBusquedaApi] = useState([]);

    return(
        <div className='resultadoBusqueda'>

            <BuscaLeccionPost guardaLeccion={setBusquedaApi} keyword={'{keyword: ' +busqueda.busquedaUsuario+ ' }'} />

            <h1 className='titulo_busqueda'>Elementos encontrados con la busqueda '{busqueda.busquedaUsuario}':</h1>

            <hr className='linea_busqueda' />

            {
                busquedaAPI.map((leccion, index) => {
                    return <Leccion key={leccion.id + index} leccion={leccion} />
                })
            }

        </div>
    )
}

export default Busqueda;