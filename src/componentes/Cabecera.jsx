import React, { useContext } from 'react';
import {ProveedorBusqueda} from '../proveedor/ProveedorBusqueda.jsx';
import '../assets/css/cabecera.css';
import arrow from '../assets/image/arrow.svg';
import ico_filtro from '../assets/image/ico_filtro.svg';
import ico_search from '../assets/image/ico_search.svg';

const Cabecera = () => {
    const [busqueda, setBusqueda] = useContext(ProveedorBusqueda);

    return(
        <React.Fragment>
            <header className='Cabecera'>

                <div className='content_Filtros'>
                    <span className='alinear_izquierda'>
                        <button className='Filtros'><img className='icoFlecha' alt="icoFlecha" src={arrow} />Filtros <img className='ico_filtro' alt="ico_filtro" src={ico_filtro} /></button>
                    </span>
                </div>
                
                <div className='content_Buscador'>
                    <input className='Buscador' type="text" value={busqueda.busquedaUsuario} onChange={ (e) => {setBusqueda({ ...busqueda, busquedaUsuario:e.target.value})}}  placeholder='Introduce un texto'  />
                    <span className='content_Boton_Buscar'>
                        <button className='Boton_Buscar'><img className='ico_search' alt="ico_search" src={ico_search} />Buscar</button>
                    </span>
                    
                </div>
                

            </header>
        </React.Fragment>
    )
}

export default Cabecera;