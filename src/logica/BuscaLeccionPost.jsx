import {useEffect, useContext} from 'react';
import {ProveedorBusqueda} from '../proveedor/ProveedorBusqueda';
import axios from 'axios';

const API_busqueda  = 'https://api.mocklets.com/mock68016/search/';

const BuscaLeccionPost = ({ guardaLeccion }) => {
    const [busqueda] = useContext(ProveedorBusqueda);

    useEffect(() => {    
        async function fetchData() {
            const response = await axios.post(API_busqueda, {keyword: busqueda.busquedaUsuario});                 
            guardaLeccion(response.data);
        }
        fetchData();
    }, []);
    
    return null;
}

export default BuscaLeccionPost;