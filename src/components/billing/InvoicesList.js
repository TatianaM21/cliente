import React, { Fragment, useContext, useState, useEffect } from "react";
import ProductoContext from "../../context/productos/productoContext";
import "bootstrap/dist/css/bootstrap.min.css";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import EditIcon from "@material-ui/icons/Edit";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import { FaPlus } from "react-icons/fa";
import { FaPrint } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

import {
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";

function buscandoFiltro(consult) {
  return function (x) {
    return x.nombre.toLowerCase().includes(consult) || !consult;
  };
}
const InvoicesList = () => {
  let fechaForm;
  const productoContext = useContext(ProductoContext);
  const {
    productos,
    obtenerProductos,
    actualizarProducto,
    mensajeConfirmación,
  } = productoContext;
  const [consulta, guardarConsulta] = useState({
    consult: "",
  });

  const [editable, guardarEditable] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
    foto: "",
    disponibles: "",
    estado: "",
  });

  const [classResponsive, setClassResponsive] = useState("table table-striped");
  const [responsiveContainer, setResponsiveConteiner] = useState(
    "contenedor-basico-movil float-right sombra-dark"
  );
  const [modalActualizar, setModalActualizar] = useState(false);
  const { consult } = consulta;
  const { nombre, descripcion, precio, foto, disponibles, estado } = editable;

  // Obtener proyectos cuando carga el componente
  useEffect(() => {
    obtenerProductos();
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setClassResponsive("table table-striped");
        setResponsiveConteiner(
          "contenedor-basico-movil float-right sombra-dark"
        );
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

  const onChangeBusqueda = (e) => {
    const { name, value } = e.target;
    guardarConsulta({
      ...consulta,
      [name]: value,
    });
  };

  const mostrarModalActualizar = (producto) => {
    setModalActualizar(true);
    guardarEditable(producto);
  };

  const cerrarModalActualizar = () => {
    guardarEditable({
      nombre: "",
      descripcion: "",
      precio: "",
      fechaCompra: "",
      disponibles: "",
      estado: "",
    });
    setModalActualizar(false);
  };
  const editar = (producto) => {
    actualizarProducto(producto);
    setModalActualizar(false);
    alert("Producto actualizado con éxito");
  };
  const handleChange = (e) => {
    guardarEditable({
      ...editable,
      [e.target.name]: e.target.value,
    });
  };

  const cambiarEstado = (producto) => {
    if (producto.estado === "Activo") {
      producto.estado = "Pendiente";
    } else {
      producto.estado = "Activo";
    }
    actualizarProducto(producto);
  };
  // revisar si productos tiene contenido
  if (productos.length === 0) {
    return <p>No hay productos, comienza creando uno</p>;
  }
  return (
    <Fragment>
      <div className={responsiveContainer}>
        <h1>Listado de Facturas</h1>
        <input
          type="text"
          placeholder="Buscar"
          className="barraBusqueda"
          name="consult"
          value={consult}
          onChange={onChangeBusqueda}
        />
        <br></br>
        <Table className={classResponsive}>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Unidad de Medida</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Fecha Compra</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos
              ? productos.filter(buscandoFiltro(consult)).map(
                  (producto) => (
                    (fechaForm = new Date(producto.fechaCompra)),
                    (producto.fechaCompra = fechaForm.toDateString()),
                    (
                      <tr key={producto._id}>
                        <td>{producto.nombre}</td>
                        <td>{producto.descripcion}</td>
                        <td>{producto.precio}</td>
                        <td>{producto.disponibles}</td>
                        <td>{producto.fechaCompra}</td>
                        <td>{producto.estado}</td>
                        <td>
                          <button
                            className="btn btn-info padding-button"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Detalles"
                            onClick={() => mostrarModalActualizar(producto)}
                          >
                            {" "}
                            <FaPlus />
                          </button>
                          {"  "}

                          <button
                            className="btn btn-success padding-button"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Entregado"
                            onClick={() => cambiarEstado(producto)}
                          >
                            <FaCheck />
                          </button>
                          {"  "}

                         
                        </td>
                      </tr>
                    )
                  )
                )
              : null}
          </tbody>
        </Table>
      </div>
      <div className="modal">
        <Modal isOpen={modalActualizar}>
          <ModalHeader>
            <div>
              <h3>Detalles de la Factura</h3>
            </div>
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              rutrum massa nec nibh feugiat pellentesque. Nullam et augue sed
              urna semper consectetur a quis felis. Curabitur iaculis diam ut
              justo fermentum scelerisque. Sed gravida sapien congue, sagittis
              turpis non, faucibus lectus. Phasellus imperdiet urna interdum
              libero scelerisque, sit amet ultricies nunc dignissim. Donec ut
              diam vitae nunc lacinia consequat eget id sem. Suspendisse
              vestibulum nisi vel dictum eleifend. Etiam rutrum neque vitae ex
              euismod fermentum. In ultrices dolor id arcu feugiat, ut venenatis
              turpis vehicula. Maecenas quis velit porta, accumsan metus vitae,
              tincidunt orci. Integer in odio eget arcu bibendum scelerisque.
              Donec pretium quam sit amet hendrerit efficitur. Nulla vestibulum
              risus vel nulla aliquet imperdiet. Quisque lobortis turpis ut leo
              scelerisque congue. Sed efficitur purus eu tempus lobortis.
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button
              className="padding-button"
              color="danger"
              onClick={() => cerrarModalActualizar()}
            >
              {" "}
              Cancelar{" "}
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </Fragment>
  );
};

export default InvoicesList;
