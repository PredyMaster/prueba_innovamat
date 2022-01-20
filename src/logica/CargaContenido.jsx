import { useEffect, useContext } from 'react';
import {ProveedorBusqueda} from '../proveedor/ProveedorBusqueda';
import axios from 'axios';

/* Rutas Api de las categorias */
const API_Innovamat_talleres  = 'https://api.mocklets.com/mock68016/talleres';
const API_Innovamat_rincones  = 'https://api.mocklets.com/mock68016/rincones';
//const API_Innovamat_ambientes  = 'https://api.mocklets.com/mock68016/ambientes';
//const API_Innovamat_rutinas  = 'https://api.mocklets.com/mock68016/rutinas';

const CargaContenido = () => {
    const [busqueda, setBusqueda] = useContext(ProveedorBusqueda);

    const actualiza = (datos, categoria) => {
        let key = 0;        

        let categoriaAmpliada = datos.map( categoria => {
            let sectionName = categoria.sectionName
            {
                let leccionAmpliada = categoria.resources.map( leccion => {
                    key++;
                    return {
                        ...leccion,
                        key: (key),
                        favorito: false
                    }
                })
                return {
                    ...leccionAmpliada,
                    sectionName: sectionName               
                }

            }
        })

        setBusqueda(busqueda => ({ ...busqueda, [categoria] : categoriaAmpliada, categoriaSeleccionada: categoriaAmpliada }) );

    }


    const Peticion_Api_Innovamat = (urlApi, categoria) => {   
        useEffect(() => {
            async function fetchData() {
                const response = await axios(urlApi);                 
                actualiza(response.data, categoria)
            }
            fetchData();            
        }, []);
    };

    /* Realizo la llamada a la Api y guardo la info en State  */
    Peticion_Api_Innovamat(API_Innovamat_talleres, 'Talleres');
    Peticion_Api_Innovamat(API_Innovamat_rincones, 'Rincones');
    //Peticion_Api_Innovamat(API_Innovamat_ambientes, 'Ambientes');
    //Peticion_Api_Innovamat(API_Innovamat_rutinas, 'Rutinas');

    return null
}

export default CargaContenido;