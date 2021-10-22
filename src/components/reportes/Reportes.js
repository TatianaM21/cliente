import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import ListadoReportes from "./ListadoReportes";
import Ganancias from "./ModalGanancias";
import Edades from "./ModalEdades";
import Productos from "./ModalProductos";
import ReporteCitas from "./ModalCitasColab";
import SideNav from '../inicio/Navbar';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
}));

const Reportes = () => {
  const classes = useStyles();
  return (
    <div className="contenedor-principal">
      <SideNav />
      <main>
        <br></br>
        <ListadoReportes />
        <Ganancias />
        <Edades />
        <Productos />
        <ReporteCitas />
      </main>
    </div>
  );
};

export default Reportes;
