import React, { useState, useContext } from 'react';
import {ProveedorBusqueda} from '../proveedor/ProveedorBusqueda';
import BuscaLeccion from '../logica/BuscaLeccion';
import '../assets/css/leccionCompleta.css';

const API_Leccion  = 'https://api.mocklets.com/mock68016/resources/';

const LeccionCompleta = () => {
    const [busqueda] = useContext(ProveedorBusqueda);
    const [leccionCompleta, setLeccionCompleta] = useState([]);

    return(
        <div className='leccionCompleta'>

            <BuscaLeccion urlApi={API_Leccion + busqueda.entradaSeleccionada} guardaLeccion={setLeccionCompleta} />
            
            {!leccionCompleta.title &&
                <h1 className='cargando'>Se está cargando la lección</h1>
            }

            <h2 className='leccionCompleta_titulo'>{leccionCompleta.title}</h2>
            <div className='contenido_leccion' dangerouslySetInnerHTML={{__html: leccionCompleta.description}} />
            
            {leccionCompleta.file&&
                  <a className='boton_descargaPDF' href={leccionCompleta.file} target="_blank" rel="noreferrer" >Descargar PDF</a>
            }

        </div>
    )
}

export default LeccionCompleta;