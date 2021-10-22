import React, { Fragment, useContext, useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import EditIcon from '@material-ui/icons/Edit';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import ProductoContext from '../../context/productos/productoContext';
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
    }
}
const ListadoProductos = () => {
    let fechaForm;
    const productoContext = useContext(ProductoContext);
    const { productos, obtenerProductos, actualizarProducto, mensajeConfirmación } = productoContext;
    const [consulta, guardarConsulta] = useState({
        consult: ''
    });

    const [editable, guardarEditable] = useState({
        nombre: '',
        descripcion: '',
        precio: '',
        foto: '',
        disponibles: '',
        estado: ''
    })

    const [classResponsive, setClassResponsive] = useState('table table-striped');
    const [responsiveContainer, setResponsiveConteiner] = useState('contenedor-basico-movil float-right sombra-dark');
    const [modalActualizar, setModalActualizar] = useState(false);
    const { consult } = consulta;
    const { nombre, descripcion, precio, foto, disponibles, estado } = editable;

    // Obtener proyectos cuando carga el componente
    useEffect(() => {
        obtenerProductos();
            const handleResize = () => {
              if (window.innerWidth >= 960) {
                setClassResponsive('table table-striped');
                setResponsiveConteiner('contenedor-basico-movil float-right sombra-dark');
              } else {
                setClassResponsive('table table-striped table-responsive');
                setResponsiveConteiner('contenedor-basico-movil sombra-dark');
              }
            };
            window.addEventListener("resize", handleResize);
            return () => {
              window.removeEventListener("resize", handleResize);
            };
      // eslint-disable-next-line
    }, []);

    const onChangeBusqueda = e => {
        const { name, value } = e.target;
        guardarConsulta({
            ...consulta,
            [name]: value
        })

    }

    const mostrarModalActualizar = (producto) => {
        setModalActualizar(true);
        guardarEditable(producto);

    };

    const cerrarModalActualizar = () => {
        guardarEditable({
            nombre: '',
            descripcion: '',
            precio: '',
            fechaCompra: '',
            disponibles: '',
            estado: ''
        });
        setModalActualizar(false);
    }
    const editar = producto => {
        actualizarProducto(producto);
        setModalActualizar(false);
        alert("Producto actualizado con éxito");
    }
    const handleChange = (e) => {
        guardarEditable({
            ...editable,
            [e.target.name]: e.target.value,

        });
    };

    const cambiarEstado = producto => {
        if (producto.estado === 'Activo') {
            producto.estado = 'Inactivo';
        } else {
            producto.estado = 'Activo'
        }
        actualizarProducto(producto);
    }
    // revisar si productos tiene contenido
    if (productos.length === 0) {
        return <p>No hay productos, comienza creando uno</p>
    }
    return (
     <Fragment>  
         <div className={responsiveContainer}>
             <h1>Listado de Productos</h1>
             <a 
              href="/nuevo-producto" 
              className="btn btn-outline-info btn-lg">Nuevo</a>
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
                            {productos ? (
                                productos.filter(buscandoFiltro(consult)).map(producto => (
                                    fechaForm = new Date(producto.fechaCompra),
                                    producto.fechaCompra = fechaForm.toDateString(),
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
                                                onClick={() => mostrarModalActualizar(producto)}
                                            > <EditIcon /></button>{"  "}

                                            {producto.estado === 'Activo' ? (
                                                <button
                                                    className="btn btn-success padding-button"
                                                    onClick={() => cambiarEstado(producto)}
                                                ><AssignmentTurnedInIcon /></button>
                                            ) :
                                                (
                                                    <button
                                                        className="btn btn-danger padding-button"
                                                        onClick={() => cambiarEstado(producto)}
                                                    > <HighlightOffIcon /> </button>

                                                )}

                                        </td>

                                    </tr>
                                )))
                                :
                                null}

                        </tbody>
                    </Table>
            </div>
            <div className="modal">
                <Modal isOpen={modalActualizar}>
                    <ModalHeader>
                        <div><h3>Editar Producto</h3></div>
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <label>Nombre</label>
                            <input
                                className="form-control"
                                type="text"
                                name="nombre"
                                value={nombre}
                                onChange={handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <label>Unidad de Medida</label>
                            <input
                                className="form-control"
                                type="text"
                                name="descripcion"
                                value={descripcion}
                                onChange={handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <label>Precio</label>
                            <input
                                className="form-control"
                                name="precio"
                                type="number"
                                value={precio}
                                onChange={handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                        </FormGroup>
                        <FormGroup>
                            <label>Unidades</label>
                            <input
                                className="form-control"
                                name="disponibles"
                                type="number"
                                value={disponibles}
                                onChange={handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <label>Estado</label>
                            <input
                                className="form-control"
                                name="estado"
                                type="text"
                                value={estado}
                                onChange={handleChange}
                                readOnly
                            />
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            className="padding-button"
                            color="primary"
                            onClick={() => editar(editable)}
                        >Editar</Button>
                        <Button
                            className="padding-button"
                            color="danger"
                            onClick={() => cerrarModalActualizar()}
                        > Cancelar   </Button>
                    </ModalFooter>
                </Modal>
            </div>
        </Fragment>
    );
}

export default ListadoProductos;