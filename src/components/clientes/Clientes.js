import React, { useContext, useEffect } from 'react';
import ListaClientes from '../clientes/ListadoClientes';
import AuthContext from '../../context/autenticacion/authContext';
import SideNav from '../inicio/Navbar';

const Clientes = () => {
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
           <ListaClientes />
       </div>
    );
}

export default Clientes;