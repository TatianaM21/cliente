import React, { Fragment, useContext, useState } from "react";
import ProductoContext from "../../context/productos/productoContext";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "@material-ui/core/Button";
import Alert from "@material-ui/lab/Alert";
import SideNav from "../inicio/Navbar";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormLabel-root": {
      fontSize: 14,
      marginTop: -10,
    },
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  formControl: {
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
    width: 265,
  },
  text: {
    fontSize: 14,
    marginTop: -10,
  },
  textFecha: {
    fontSize: 14,
    marginTop: -2,
  },
  textField: {
    marginRight: theme.spacing(1),
    fontSize: 14,
  },
}));

const FixedExpense = () => {
  const classes = useStyles();
  const productoContext = useContext(ProductoContext);
  const {
    errorformulario,
    agregarProducto,
    mostrarError,
    textoAlert,
    limpiarError,
  } = productoContext;
  const [producto, guardarProducto] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
    fechaCompra: "",
    disponibles: "",
    estado: "",
  });

  const { nombre, descripcion, precio, fechaCompra, disponibles, estado } =
    producto;
  // Lee los contenidos del input
  const onChangeProducto = (evento) => {
    limpiarError();
    //destructure de los valores enviados por el metodo onchange de cada input
    const { name, value } = evento.target;
    //expresion regular que no permite que en campos de texto se escriban numeros
    if (
      name !== "disponibles" &&
      name !== "descripcion" &&
      name !== "fechaCompra" &&
      name !== "precio"
    ) {
      let regex = new RegExp("^[ñíóáéú a-zA-Z ]+$");
      for (let i = 0; i <= value.length - 1; i++) {
        let letra = value[i];
        if (!regex.test(letra) || !letra === " ") {
          return;
        }
      }
    }
    guardarProducto({
      ...producto,
      [name]: value,
    });
  };

  const onSubmitProducto = (e) => {
    e.preventDefault();
    // Validar  de campos
    if (
      nombre === "" ||
      descripcion === "" ||
      precio === null ||
      disponibles === null ||
      estado === ""
    ) {
      return;
    }
    if (disponibles <= 0 || disponibles >= 200) {
      mostrarError("La cantidad debe ser mayor a 0 y menor a 200");
      return;
    }

    if (precio <= 0 || precio >= 200000) {
      mostrarError("El valor debe ser mayor a 0 y menor a 200.000$");
      return;
    }
    agregarProducto(producto);
    limpiarForm();
    alert("Agregado con exito");
  };

  const limpiarForm = () => {
    guardarProducto({
      nombre: "",
      descripcion: "",
      precio: "",
      fechaCompra: "",
      disponibles: "",
      estado: "",
    });
  };

  return (
    <Fragment>
      <SideNav />
      <div className="contenedor-principal">
        <br></br>
        <form onSubmit={onSubmitProducto}>
          <main className={classes.layout}>
            {errorformulario ? (
              <Alert severity="error">{textoAlert}</Alert>
            ) : null}

            <Paper className={classes.paper}>
              <div className="campos-obligatorios">
                <h3>Los campos marcados con * son obligatorios</h3>
              </div>

              <h1>Gasto Fijo</h1>
              <hr></hr>
              <br></br>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="nombre"
                    name="nombre"
                    label="Descripción"
                    value={nombre}
                    className={classes.root}
                    fullWidth
                    onChange={onChangeProducto}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    type="number"
                    required
                    id="precio"
                    name="precio"
                    label="Valor"
                    value={precio}
                    className={classes.root}
                    fullWidth
                    onChange={onChangeProducto}
                  />
                </Grid>
              </Grid>
              <div className={classes.buttons}>
                <Button href="/expenses-type" className={classes.button}>
                  Atras
                </Button>
                <Button
                  className={classes.button}
                  onClick={() => limpiarForm()}
                >
                  Limpiar{" "}
                </Button>

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  Registrar{" "}
                </Button>
              </div>
            </Paper>
          </main>
        </form>
      </div>
    </Fragment>
  );
};

export default FixedExpense;
