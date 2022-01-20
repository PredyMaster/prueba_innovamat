import React, {useState, useContext} from 'react';
import {ProveedorBusqueda} from '../proveedor/ProveedorBusqueda';
import '../assets/css/leccion.css';
import coraVacio from '../assets/image/cora_vacio.svg';
import coraLleno from '../assets/image/cora_lleno.svg';

const Leccion = ({leccion}) => {
    const [busqueda, setBusqueda] = useContext(ProveedorBusqueda);
    const [favorito, setFavorito] = useState(false);
    let topeCaracteres = 50;

    const marcaFavorito = () => {
        leccion.favorito = !leccion.favorito;
        setFavorito(!favorito);
    }

    return(
        <React.Fragment>

            { 
            
                <div className='leccion_content'>
                    <div className='leccion_click' onClick={() => setBusqueda(busqueda => ({ ...busqueda, entradaSeleccionada : leccion.id })) }>
                        <img className='leccion_imagen' alt='Imagen de la lección' src={leccion.image} />
                        <h2 className='leccion_titulo'>{leccion.title}</h2>
                        <p className='leccion_descr'>{leccion.description.substr(0, topeCaracteres) + " ..."}</p>
                    </div>

                    <div className='favorito' onClick={marcaFavorito}>
                        <img className='corazon' alt='corazon' src={leccion.favorito === true ?  coraLleno : coraVacio } /> <p className={leccion.favorito === true ? 'textoFavActivo' : 'textoFav' }>Favorito</p>
                    </div>          

                </div> 
            
            }

        </React.Fragment>
    )
}

export default Leccion;