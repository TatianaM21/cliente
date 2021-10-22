import React, { useContext, useEffect } from 'react';
import ListaProductos from '../productos/ListadoProductos';
import AuthContext from '../../context/autenticacion/authContext';
import SideNav from '../inicio/Navbar';

const Productos = () => {
    // Extraer la información de autenticación
    const authContext = useContext(AuthContext);
    const { usuarioAutenticado } = authContext;

    useEffect(() => {
        usuarioAutenticado();
        // eslint-disable-next-line
    }, [])
    return (
      <div className="contenedor-principal">
          <SideNav/>  
          <ListaProductos /> 
     </div>
      
    );
}

export default Productos;