import React, { Fragment, useEffect , useContext} from 'react';
import AuthContext from '../../context/autenticacion/authContext';
import SideNav from './Navbar';
const Inicio = () => {

    // Extraer la información de autenticación
    const authContext = useContext(AuthContext);
    const { usuarioAutenticado } = authContext;
    useEffect(() => {
        usuarioAutenticado();
        // eslint-disable-next-line
    }, [])

    return (
        <Fragment>
            <SideNav/>
        </Fragment>
    );
}

export default Inicio;