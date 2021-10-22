import React, { useContext, useEffect, useState, Fragment } from 'react';
import ClienteContext from '../../context/clientes/clienteContext';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import EditIcon from '@material-ui/icons/Edit';
import {
    Table,
    Button,
    Container,
    Modal,
    ModalHeader,
    ModalBody,
    FormGroup,
    ModalFooter,
} from "reactstrap";

function buscandoFiltro(consult) {
    return function (x) {
        return x.documento.includes(consult) || !consult;
    }
}

const ListadoClientes = () => {
    //instanciar context de empleado
    const clienteContext = useContext(ClienteContext);

    //extraer objetos y funciones del state de clientes
    const { clientes, mensaje, obtenerClientes,actualizarCliente } = clienteContext;

    const [consulta, guardarConsulta] = useState({
        consult: ''
    });
    const [modalActualizar, setModalActualizar] = useState(false);
    const [responsiveContainer, setResponsiveConteiner] = useState('contenedor-basico-movil float-right sombra-dark');
    const [classResponsive, setClassResponsive] = useState('table table-striped');

    const { consult } = consulta;

    const [editable, guardarEditable] = useState({
        tipo: '',
        documento: '',
        nombres: '',
        apellidos: '',
        correo: '',
        telefono: '',

    })
    const { tipo, documento, nombres, apellidos, correo, telefono, } = editable;
    // Obtener los clientes cuando carga el componente
    useEffect(() => {
        obtenerClientes();
        const handleResize = () => {
            if (window.innerWidth >= 960) {
              setResponsiveConteiner('contenedor-basico-movil float-right sombra-dark');
              setClassResponsive('table table-striped');
            } else {
              setResponsiveConteiner('contenedor-basico-movil sombra-dark');
              setClassResponsive('table table-striped table-responsive');
            }
          };
          window.addEventListener("resize", handleResize);
          return () => {
            window.removeEventListener("resize", handleResize);
          };
        // eslint-disable-next-line
    }, [mensaje]);


    const onChangeBusqueda = e => {
        const { name, value } = e.target;
        guardarConsulta({
            ...consulta,
            [name]: value
        })
    }

    // revisar si hay empleados registrados
    if (clientes.length === 0) {
        return <p>No hay empleados, comienza creando uno</p>
    }
    let fechaForm;

    const cambiarEstado = cliente => {
        if (cliente.estado === 'Activo') {
            cliente.estado = 'Inactivo';
        } else {
            cliente.estado = 'Activo'
        }
        actualizarCliente(cliente);
    }

    const mostrarModalActualizar = (cliente) => {
        setModalActualizar(true);
        guardarEditable(cliente);

    };

    const cerrarModalActualizar = () => {
        guardarEditable({
            tipo: '',
            documento: '',
            nombres: '',
            apellidos: '',
            correo: '',
            confirmarCorreo: '',
            telefono: '',
            fecha: '',
            perfil: '',
        });
        setModalActualizar(false);
    }

    const handleChange = (e) => {
        guardarEditable({
            ...editable,
            [e.target.name]: e.target.value,

        });
    };
    const editar = cliente => {
        actualizarCliente(cliente);
        setModalActualizar(false);
        alert("Cliente actualizado con éxito");
    }
    

    return (
        <Fragment>
         <div className={responsiveContainer}>
                <h1>Listado de Clientes</h1>
                <a 
                  href="/nuevo-cliente" 
                  className="btn btn-outline-info btn-lg">Nuevo</a>
                    <input
                        type="number"
                        placeholder="Buscar"
                        className="barraBusqueda"
                        name="consult"
                        value={consult}
                        onChange={onChangeBusqueda}
                    />
            
                <br></br>
                <Container>
                    <Table className={classResponsive}>
                        <thead>
                            <tr>
                                <th>Tipo Doc.</th>
                                <th>N° de documento</th>
                                <th>Nombres</th>
                                <th>Apellidos</th>
                                <th>Correo Electrónico</th>
                                <th>Teléfono</th>
                                <th>Fecha de Nacimiento</th>
                                <th>Estado</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clientes ? (
                                clientes.filter(buscandoFiltro(consult)).map(cliente => (
                                    fechaForm = new Date(cliente.fecha),
                                    cliente.fecha = fechaForm.toUTCString(),
                                    <tr key={cliente._id}>
                                        <td>{cliente.tipo}</td>
                                        <td>{cliente.documento}</td>
                                        <td>{cliente.nombres}</td>
                                        <td>{cliente.apellidos}</td>
                                        <td>{cliente.correo}</td>
                                        <td>{cliente.telefono}</td>
                                        <td>{cliente.fecha}</td>
                                        <td>{cliente.estado}</td>

                                        <td>
                                            <button
                                                className="btn btn-primary padding-button"
                                                onClick={() => mostrarModalActualizar(cliente)}
                                            > <EditIcon /></button>{"  "}
                                            {cliente.estado === 'Activo' ? (
                                                <button
                                                    className="btn btn-success padding-button"
                                                    onClick={() => cambiarEstado(cliente)}
                                                ><AssignmentTurnedInIcon /></button>
                                            ) :
                                                (
                                                    <button
                                                        className="btn btn-danger padding-button"
                                                        onClick={() => cambiarEstado(cliente)}
                                                    > <HighlightOffIcon /> </button>

                                                )}

                                        </td>
                                    </tr>
                                )))
                                :
                                null}
                        </tbody>
                    </Table>
                </Container>
            </div>
            <Modal isOpen={modalActualizar}>
                <ModalHeader>
                    <div><h3>Editar Cliente</h3></div>
                </ModalHeader>

                <ModalBody>
                    <FormGroup>
                        <label htmlFor="tipo">Tipo Documento</label>
                        <input
                            type="text"
                            id="tipo"
                            name="tipo"
                            className="form-control"
                            placeholder="Tipo de Documento"
                            value={tipo}
                            onChange={handleChange}
                        />
                    </FormGroup>

                    <FormGroup>
                        <label htmlFor="documento">N° Documento</label>
                        <input
                            type="number"
                            id="documento"
                            name="documento"
                            className="form-control"
                            placeholder="Número de Doc."
                            value={documento}
                            onChange={handleChange}
                        />
                    </FormGroup>

                    <FormGroup>
                        <label htmlFor="nombres">Nombres</label>
                        <input
                            type="text"
                            id="nombres"
                            name="nombres"
                            className="form-control"
                            placeholder="Tu nombre"
                            value={nombres}
                            onChange={handleChange}
                        />
                    </FormGroup>

                    <FormGroup>
                        <label htmlFor="apellidos">Apellidos</label>
                        <input
                            type="text"
                            id="apellidos"
                            name="apellidos"
                            className="form-control"
                            placeholder="Tus apellidos"
                            value={apellidos}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="correo">Correo Electrónico</label>
                        <input
                            type="email"
                            id="correo"
                            name="correo"
                            className="form-control"
                            placeholder="Tu Correo Electrónico"
                            value={correo}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="telefono">Teléfono</label>
                        <input
                            type="number"
                            id="telefono"
                            name="telefono"
                            className="form-control"
                            placeholder="Tu Teléfono"
                            value={telefono}
                            onChange={handleChange}
                        />
                    </FormGroup>
                </ModalBody>

                <ModalFooter>
                    <Button
                        className="padding-button"
                        color="primary"
                        onClick={() => editar(editable)}
                    > Editar </Button>

                    <Button
                        className="padding-button"
                        color="danger"
                        onClick={() => cerrarModalActualizar()}
                    > Cancelar </Button>
                </ModalFooter>
            </Modal>
        </Fragment>
    );
}

export default ListadoClientes;