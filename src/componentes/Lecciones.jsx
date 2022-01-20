import React from 'react';
import Leccion from './Leccion';

const Lecciones = ({lecciones}) => {

    const titulo = lecciones[lecciones.length -1];
    const leccionFiltrada = lecciones.filter(leccion => typeof leccion === 'object');

    return(
        <React.Fragment>
            <h2 className='titulo_lecciones'>{titulo}</h2>
            <hr className='linea_lecciones'/>
            {
                leccionFiltrada.map( (leccion) => {
                    return <Leccion key={leccion.key} leccion={leccion} />
                })
            }

        </React.Fragment>
    )
}

export default Lecciones;