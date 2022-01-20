import { createContext , useState } from 'react';


export default ({ children }) =>{
    const [busqueda,setBusqueda] = useState({busquedaUsuario : '', entradaSeleccionada : ''});

    return (            
            <ProveedorBusqueda.Provider value={[busqueda,setBusqueda]}>
                {children}
            </ProveedorBusqueda.Provider>  
    );
}

export const ProveedorBusqueda = createContext();