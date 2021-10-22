import React, { Fragment, useEffect, useContext, useState } from 'react';
import AuthContext from '../../context/autenticacion/authContext';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Link } from 'react-router-dom';
import SettingsIcon from '@material-ui/icons/Settings';
import { HelpOutline } from '@material-ui/icons';

const Header = () => {

    const authContext = useContext(AuthContext);
    const { usuario, usuarioAutenticado, cerrarSesion, token } = authContext;
    const renderTooltip = props => (
        <Tooltip {...props}>Iniciar Sesión</Tooltip>
    );

    const renderTooltipTwo = props => (
        <Tooltip {...props}>Cerrar Sesión</Tooltip>
    );

    const [iconResponsive, setIconResponsive]=useState('')

    useEffect(() => {
        usuarioAutenticado();
        // eslint-disable-next-line
    }, []);
    return (
        <Fragment>
            <div className="header-segundario">
                <ul>
                        {usuario?.rol == '60f4ba1618bcb70ffca87c9c'  ? (
                              <li >
                                <Link className="btn-cerrar" onClick={() => window.open("https://drive.google.com/file/d/1KSHdEPSoXRhLXEObN5cVQMsZcerlJuGi/view?usp=sharing")}><HelpOutline /></Link>
                              </li>
                         )  :null}

                        {usuario?.rol == '60f4ba2518bcb70ffca87c9d'  ?   (  
                             <li >
                                <Link className="btn-cerrar" onClick={() => window.open("https://drive.google.com/file/d/1yYsTBWXBYVhgZZHENbAIZBgoLZOKdzlo/view?usp=sharing")}><HelpOutline /></Link>
                            </li>
                         ): null  }
                        {usuario ?
                            (<li >
                                <Link className="btn-cerrar" to="/nueva-pregunta"><SettingsIcon /></Link>
                            </li>)
                            :
                            null}
                        <li>
                            {usuario ?
                                (<OverlayTrigger placement="left-start" overlay={renderTooltipTwo}>
                                    <button
                                        className="btn-cerrar"
                                        onClick={() => cerrarSesion()}
                                    ><LockOutlinedIcon /></button>
                                </OverlayTrigger>)
                                :
                                (<OverlayTrigger placement="bottom-end" overlay={renderTooltip}>
                                    <Link className="btn-cerrar" to="/iniciar-sesion"><LockOpenIcon /></Link>
                                </OverlayTrigger>)
                            }
                        </li>
                        {usuario ? (
                            <li >
                                {usuario ? <p className="nombre-usuario menos-ancho" >Hola,<span>{usuario?.nombres} </span> </p> : null}
                            </li>
                        ) : null}
                  
                </ul>
            </div>
        </Fragment>
    );
}

export default Header;