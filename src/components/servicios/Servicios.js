import React, { useEffect, useContext } from 'react';
import ListaServicios from '../servicios/listadoServicios';
import AuthContext from '../../context/autenticacion/authContext';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({

    appBar: {
        position: 'relative',
    }

}));

const Servicios = () => {

    const classes = useStyles();

    // Extraer la información de autenticación
    const authContext = useContext(AuthContext);
    const { usuarioAutenticado } = authContext;

    useEffect(() => {

        usuarioAutenticado();
        // eslint-disable-next-line
    }, []);

    return (
        <div className="seccion-principal">
            <AppBar position="absolute" color="default" className={classes.appBar}>
            </AppBar>

            <div className="contenedor-principal">
                <main>
                    <br></br>
                    <ListaServicios />
                </main>
            </div>
        </div>

    );
}

export default Servicios;