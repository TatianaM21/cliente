import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/autenticacion/authContext';
import SideNav from '../inicio/Navbar';
import InvoicesList from './InvoicesList';

const Invoices = () => {
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
          <InvoicesList/>
         </div>
      
    );
}

export default Invoices;