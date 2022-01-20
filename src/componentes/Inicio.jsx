import React from 'react';
import ProveedorBusqueda from '../proveedor/ProveedorBusqueda.jsx';
import CargaContenido from '../logica/CargaContenido.jsx';
import Cabecera from './Cabecera';
import Aula from './Aula';

const Inicio = () => {

    return(
        <ProveedorBusqueda>
            <CargaContenido />
            <Cabecera/>
            <Aula />
        </ProveedorBusqueda>
    )
}

export default Inicio;