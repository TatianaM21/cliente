import React, { useContext, useEffect } from 'react';
import OrderList from '../orders/OrderList';
import AuthContext from '../../context/autenticacion/authContext';
import SideNav from '../inicio/Navbar';

const Pedidos = () => {
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
          <OrderList/>
      </div>
      
    );
}

export default Pedidos;