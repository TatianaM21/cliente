import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/autenticacion/authContext";
import SideNav from "../inicio/Navbar";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const ExpensesType = () => {
  const classes = useStyles();

  // Extraer la información de autenticación
  const authContext = useContext(AuthContext);
  const { usuarioAutenticado } = authContext;

  useEffect(() => {
    usuarioAutenticado();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="contenedor-principal">
      <SideNav />
      <br></br>
      <h1>Tipo de Gasto</h1>
      <br></br>
      <div className="container-catalog sombra-dark text-center  mt-100">
        <div className="row">
          <div className="col">
            <div class="card" style={{ width: 30 + "rem" }}>
              <a href="/expenses-fixed" className="btn btn-outline-info btn-lg">
                Fijo
              </a>
            </div>
          </div>
          <div className="col">
            <div class="card" style={{ width: 30 + "rem" }}>
              <a
                href="/expenses-variable"
                className="btn btn-outline-info btn-lg"
              >
                Variable
              </a>
            </div>
          </div>
        </div>
        <div className={classes.buttons}>
          <Button href="/expenses" 
            className={classes.button}>
            Atras
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ExpensesType;
