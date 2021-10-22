import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/autenticacion/authContext';
import SideNav from '../inicio/Navbar';
import ExpensesList from './ExpensesList';

const Expenses = () => {
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
          <ExpensesList/>
      </div>
      
    );
}

export default Expenses;