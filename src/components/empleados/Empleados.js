import React, { useContext, useEffect } from 'react';
import ListaEmpleados from '../empleados/ListadoEmpleados';
import AuthContext from '../../context/autenticacion/authContext';
import SideNav from '../inicio/Navbar';

const Empleados = () => {
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
            <ListaEmpleados />
        </div>
    );
}

export default Empleados;