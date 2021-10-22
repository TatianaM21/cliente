import React, { Fragment, useState, useEffect, useContext } from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import { makeStyles } from "@material-ui/core/styles";
import OrderContext from "../../context/orders/orderContext";
import ShoppingCart from "../orders/ShoppingCart";

import { Table, Button } from "reactstrap";

function buscandoFiltro(consult) {
  return function (x) {
    return x.nombre.toLowerCase().includes(consult) || !consult;
  };
}

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const Catalog = () => {
  const classes = useStyles();

  const productos = [
    {
      _id: 1,
      nombre: "Jabon de manos",
      descripcion: "250ml",
      precio: 2500,
      disponibles: 20,
      precio1: 2000,
      precio2: 2500,
      precio3: 2700,
    },
    {
      _id: 2,
      nombre: "Limpia pisos",
      descripcion: "250ml",
      precio: 5500,
      disponibles: 30,
      precio1: 3000,
      precio2: 3500,
      precio3: 3700,
    },
    {
        _id: 3,
        nombre: "Jabon de manos",
        descripcion: "250ml",
        precio: 2500,
        disponibles: 20,
        precio1: 2000,
        precio2: 2500,
        precio3: 2700,
      },
      {
        _id: 4,
        nombre: "Limpia pisos",
        descripcion: "250ml",
        precio: 5500,
        disponibles: 30,
        precio1: 3000,
        precio2: 3500,
        precio3: 3700,
      },
  ];
  const orderContext = useContext(OrderContext);
  const { changeStep, step } = orderContext;
  const [consulta, guardarConsulta] = useState({
    consult: "",
  });
  const { consult } = consulta;
  const [classResponsive, setClassResponsive] = useState("table table-striped");
  const [responsiveContainer, setResponsiveConteiner] = useState(
    "container-catalog"
  );
  // Obtener proyectos cuando carga el componente
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setClassResponsive("table table-striped");
        setResponsiveConteiner("container-catalog sombra-dark");
      } else {
        setClassResponsive("table table-striped table-responsive");
        setResponsiveConteiner("contenedor-basico-movil sombra-dark");
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line
  }, []);

  const goBackToTheStep = () => {
    const currentStep = step - 1;
    changeStep(currentStep);
  };

  const moveOnToTheNextStep = () => {
    const currentStep = step + 1;
    changeStep(currentStep);
  };

  return (
    <Fragment>

        <div className={responsiveContainer}>
          <input
            type="text"
            placeholder="Buscar"
            className="barraBusqueda"
            name="consult"
          />
          <br></br>
          <Table className={classResponsive}>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Unidad de Medida</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Agregar</th>
              </tr>
            </thead>
            <tbody>
              {productos
                ? productos.filter(buscandoFiltro(consult)).map((producto) => (
                    <tr key={producto._id}>
                      <td>{producto.nombre}</td>
                      <td>{producto.descripcion}</td>
                      <td>
                        {" "}
                        <Select
                          required
                          labelId="required-label"
                          id="select-required"
                          name="estado"
                        >
                          <MenuItem value={producto.precio1}>
                            {producto.precio1} Minorista
                          </MenuItem>
                          <MenuItem value={producto.precio2}>
                            {producto.precio2} Mayorista
                          </MenuItem>
                          <MenuItem value={producto.precio3}>
                            {producto.precio3} Minimercado
                          </MenuItem>
                        </Select>
                      </td>
                      <td>
                        <TextField
                          required
                          type="number"
                          id="disponibles"
                          name="disponibles"
                        />
                      </td>
                      <td>
                        {" "}
                        <button className="btn btn-success padding-button">
                          <AssignmentTurnedInIcon />
                        </button>
                      </td>
                    </tr>
                  ))
                : null}
            </tbody>
          </Table>
          <div className="btn-text-center">
            <Button
              className={classes.button}
              onClick={() => goBackToTheStep()}
            >
              Atras
            </Button>
            <Button
              className={classes.button}
              onClick={() => moveOnToTheNextStep()}
            >
              Finalizar{" "}
            </Button>
          </div>
        </div>
   
    </Fragment>
  );
};
export default Catalog;
