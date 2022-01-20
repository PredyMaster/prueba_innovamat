import React, { useState, useContext } from 'react';
import {ProveedorBusqueda} from '../proveedor/ProveedorBusqueda';
import '../assets/css/categorias.css';

const Categoria = () => {
    const [busqueda, setBusqueda] = useContext(ProveedorBusqueda);
    const [catActiva, setCatActiva] = useState()


    return(

        <nav className='menu_content'>
            <span className='menu'>
                <p className='dinamicas'>Dinámicas</p>
                <hr className='categorias_hr' />
                <ul className='listaCategorias'>

                    <li className={catActiva === 'Talleres' ? 'categoria active' : 'categoria'}
                    onClick={ () => {setBusqueda(busqueda => ({ ...busqueda, categoriaSeleccionada : busqueda.Talleres, busquedaUsuario : '', entradaSeleccionada : '' })) ; setCatActiva('Talleres')} }> 
                        <svg id="icoTalleres" className="svgCategoria" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.66 27.44">
                        <path d="M11.33,5.49,9.76,3.14a1.48,1.48,0,0,0-1.34-.67,1.52,1.52,0,0,0-1.25.83L4.58,8.49h12L14.51,4.35A1.5,1.5,0,0,0,12.11,4L11,5"/>
                        <path d="M24.08,4.72l-3,8.25h6Z"/><path d="M24.08,13v3"/><path d="M7.58,13.72,4.58,22h6Z"/><path d="M7.58,22v3"/><path d="M23.33,21.42a4.8,4.8,0,0,1,1.27,2.06"/>
                        <path d="M18.83,19.57q.36.09.75.15a8.79,8.79,0,0,1,1.51.38"/><path d="M14.53,16.39a5.66,5.66,0,0,0,1.3,1.7"/><path d="M13.58,11.47a17.09,17.09,0,0,0,.09,1.75"/></svg>
                        Talleres
                    </li>

                    <li className={catActiva === 'Rincones' ? 'categoria active' : 'categoria'}
                    onClick={ () => {setBusqueda(busqueda => ({ ...busqueda, categoriaSeleccionada : busqueda.Rincones, busquedaUsuario : '', entradaSeleccionada : '' })) ; setCatActiva('Rincones')} }> 
                        <svg id="icoRincones" className="svgCategoria" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.66 27.44">
                        <path d="M4.58,4a1.5,1.5,0,0,1,1.5-1.5h19.5A1.5,1.5,0,0,1,27.08,4v19.5a1.5,1.5,0,0,1-1.5,1.5H6.08a1.5,1.5,0,0,1-1.5-1.5Z"/>
                        <path d="M21.07,22a3,3,0,1,0-3-3A3,3,0,0,0,21.07,22Z"/><path d="M7.58,22l3-6,3,6Z"/><path d="M7.58,6.22h6v6h-6Z"/>
                        <path d="M21.5,5.91l.87,2.29h1.68a.4.4,0,0,1,.4.25.43.43,0,0,1-.1.46l-1.47,1,.81,1.86a.44.44,0,0,1-.63.55l-2-1.1-2,1.1a.42.42,0,0,1-.51,0,.43.43,0,0,1-.12-.5l.81-1.86-1.46-1a.4.4,0,0,1-.11-.46.42.42,0,0,1,.4-.26h1.68L20.7,5.9a.45.45,0,0,1,.4-.24A.46.46,0,0,1,21.5,5.91Z"/></svg> 
                        Rincones
                    </li>

                    <li className={catActiva === 'Ambiente' ? 'categoria active' : 'categoria'} 
                    onClick={ () => {setBusqueda(busqueda => ({ ...busqueda, categoriaSeleccionada : null })) ; setCatActiva('Ambiente')} }>  
                        <svg id="icoAmbiente" className="svgCategoria" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.66 27.44">
                        <path d="M4.58,20.47h6V25h-5a1,1,0,0,1-1-1Z"/><path d="M21,16H6.08a1.5,1.5,0,0,0-1.5,1.5v3H22"/>
                        <path d="M10.58,20.47h6V24a1,1,0,0,1-1,1h-5Z"/><path d="M5.58,2.47h4a1,1,0,0,1,1,1V7h-6V3.47A1,1,0,0,1,5.58,2.47Z"/>
                        <path d="M17.58,2.47h4a1,1,0,0,1,1,1V7h-6V3.47A1,1,0,0,1,17.58,2.47Z"/><path d="M10.58,11.47h6V16h-6Z"/>
                        <path d="M19.54,9.09A1.5,1.5,0,0,1,20.7,7.31L22.17,7A1.5,1.5,0,0,1,24,8.16l3.1,14.69a1.5,1.5,0,0,1-1.16,1.78l-1.47.31a1.51,1.51,0,0,1-1.78-1.16Z"/>
                        <path d="M22.58,7h-18v3a1.5,1.5,0,0,0,1.5,1.5h14"/></svg>                    
                        Ambiente
                    </li>
                    <li className={catActiva === 'Rutinas' ? 'categoria active' : 'categoria'}
                    onClick={ () => {setBusqueda(busqueda => ({ ...busqueda, categoriaSeleccionada : null })) ; setCatActiva('Rutinas')} }> 
                        <svg id="icoRutinas" className="svgCategoria" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.66 27.44">
                        <path d="M10.58,14.47h.75a.76.76,0,0,1,.75.75v5.25"/><path d="M17.66,14.47h1.92a.72.72,0,0,1,.61.32.74.74,0,0,1,.09.69l-1.87,5"/>
                        <path d="M4.58,7a1.5,1.5,0,0,1,1.5-1.5h19.5A1.5,1.5,0,0,1,27.08,7v16.5a1.5,1.5,0,0,1-1.5,1.5H6.08a1.5,1.5,0,0,1-1.5-1.5Z"/>
                        <path d="M4.58,11.47h22.5"/><path d="M10.58,7.72V2.47"/><path d="M21.08,7.72V2.47"/></svg> 
                        Rutinas
                    </li>
                </ul>
            </span>

        </nav>

    )

}

export default Categoria;