import {useEffect} from 'react';
import axios from 'axios';

const BuscaLeccion = ({urlApi, guardaLeccion}) => {

    useEffect(() => {
        async function fetchData() {
            const response = await axios(urlApi );                 
            guardaLeccion(response.data);
        }
        fetchData();
        
    }, []);
    
    return null;
}

export default BuscaLeccion;