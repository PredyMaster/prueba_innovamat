import React, {useContext, useState} from 'react';
import {ProveedorBusqueda} from '../proveedor/ProveedorBusqueda';
import Categoria from './Categoria';
import CategoriaCargada from './CategoriaCargada';
import Busqueda from './Busqueda';
import LeccionCompleta from './LeccionCompleta';

const Aula = () => {
    const [busqueda] = useContext(ProveedorBusqueda);
    const [mostrarMenu, setMostrarMenu] = useState(false);

    return (
    
        <React.Fragment>
            <Categoria menu={setMostrarMenu} />
            {
                busqueda.entradaSeleccionada === '' ?

                    busqueda.busquedaUsuario === undefined || busqueda.busquedaUsuario === '' ?
                    <CategoriaCargada estadoMenu={mostrarMenu} /> : <Busqueda />
                
                : <LeccionCompleta />
            }            

        </React.Fragment>
    )
}

export default Aula;