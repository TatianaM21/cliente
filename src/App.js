import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import NuevaCuenta from "./components/auth/NuevaCuenta";
import Servicios from "./components/servicios/Servicios";
import AlertaState from "./context/alertas/alertaState";
import AuthState from "./context/autenticacion/authState";
import tokenAuth from "./config/token";
import ServicioState from "./context/servicios/servicioState";
import NuevoServicio from "./components/servicios/nuevoServicio";
import RutaPrivada from "./components/rutas/RutaPrivada";
import ListadoServicios from "./components/servicios/listadoServicios";
import Empleados from "./components/empleados/Empleados";
import EmpleadoSatate from "./context/empleados/empleadoState";
import Inicio from "./components/inicio/inicio";
import NuevoEmpleado from "./components/empleados/NuevoEmpleado";
import NuevoProducto from "./components/productos/NuevoProducto";
import Productos from "./components/productos/Productos";
import ProductoState from "./context/productos/productoState";
import ConfiguracionState from "./context/cambioContraseña/configuracionState";
import NuevaRespuesta from "./components/respuestas/NuevaRespuesta";
import RespuestaState from "./context/respuestas/respuestaState";
import ValidarPregunta from "./components/cambioContraseña/ValidarPregunta";
import NuevaContraseña from "./components/cambioContraseña/NuevaContraseña";
import Clientes from "./components/clientes/Clientes";
import ClienteState from "./context/clientes/clienteState";
import Agendamientos from "./components/agendamiento/Agendamientos";
import AgendamientoState from "./context/agendamiento/agendamientoState";
import Modal from "react-modal";
import NuevoCliente from "./components/clientes/NuevoCliente";
import Reportes from "./components/reportes/Reportes";
import ReporteState from "./context/reportes/reporteState";
import InsumoState from "./context/insumos/insumoState";
import ServiciosParaClientes from "./components/servicios/ServiciosParaClientes";
import Orders from "./components/orders/Orders";
import NewOrder from "./components/orders/NewOrder";
import Customer from "./components/orders/Customer";
import Catalog from "./components/orders/Catalog";
import OrderState from "./context/orders/orderState";
import Invoices from "./components/billing/Invoices";
import Expenses from "./components/expenses/Expenses";
import ExpensesType from "./components/expenses/ExpensesType";
import VariableExpense from "./components/expenses/VariableExpense";
import FixedExpense from "./components/expenses/FixedExpense";
Modal.setAppElement("#root");

//Revisar si tenemos un token
const token = localStorage.getItem("token");
if (token) {
  tokenAuth(token);
}

function App() {
  return (
    (
      <OrderState>
      <InsumoState>
          <ReporteState>
            <ClienteState>
                <AgendamientoState>
                  <ClienteState>
                    <EmpleadoSatate>
                      <ServicioState>
                        <ProductoState>
                          <AlertaState>
                            <ConfiguracionState>
                              <RespuestaState>
                                <AuthState>
                                  <Router>
                                    <Switch>
                                      <RutaPrivada
                                        exact
                                        path="/inicio"
                                        component={Inicio}
                                      />
                                      <RutaPrivada
                                        exact
                                        path="/nueva-cuenta"
                                        component={NuevaCuenta}
                                      />
                                      <RutaPrivada
                                        exact
                                        path="/nuevo-servicio"
                                        component={NuevoServicio}
                                      />
                                      <RutaPrivada
                                        exact
                                        path="/empleados"
                                        component={Empleados}
                                      />
                                      <RutaPrivada
                                        exact
                                        path="/nuevo-empleado"
                                        component={NuevoEmpleado}
                                      />
                                      <RutaPrivada
                                        exact
                                        path="/nuevo-producto"
                                        component={NuevoProducto}
                                      />
                                      <RutaPrivada
                                        exact
                                        path="/productos"
                                        component={Productos}
                                      />
                                      <RutaPrivada
                                        exact
                                        path="/nueva-pregunta"
                                        component={NuevaRespuesta}
                                      />
                                      <RutaPrivada
                                        exact
                                        path="/servicios"
                                        component={Servicios}
                                      />
                                      <RutaPrivada
                                        exact
                                        path="/agendamiento"
                                        component={Agendamientos}
                                      />
                                      <RutaPrivada
                                        exact
                                        path="/clientes"
                                        component={Clientes}
                                      />
                                      <RutaPrivada
                                        exact
                                        path="/nuevo-cliente"
                                        component={NuevoCliente}
                                      />
                                      <RutaPrivada
                                        exact
                                        path="/reportes"
                                        component={Reportes}
                                      />
                                       <RutaPrivada
                                        exact
                                        path="/orders"
                                        component={Orders}
                                      />
                                        <RutaPrivada
                                        exact
                                        path="/new-order"
                                        component={NewOrder}
                                      />
                                        <RutaPrivada
                                        exact
                                        path="/customer"
                                        component={Customer}
                                      />
                                        <RutaPrivada
                                        exact
                                        path="/catalog"
                                        component={Catalog}
                                      />
                                       <RutaPrivada
                                        exact
                                        path="/invoices"
                                        component={Invoices}
                                      />
                                       <RutaPrivada
                                        exact
                                        path="/expenses"
                                        component={Expenses}
                                      />
                                        <RutaPrivada
                                        exact
                                        path="/expenses-type"
                                        component={ExpensesType}
                                      />
                                        <RutaPrivada
                                        exact
                                        path="/expenses-variable"
                                        component={VariableExpense}
                                      />
                                        <RutaPrivada
                                        exact
                                        path="/expenses-fixed"
                                        component={FixedExpense}
                                      />
                                      <RutaPrivada
                                        exact
                                        path="/"
                                        component={Login}
                                      />
                                      <RutaPrivada
                                        exact
                                        path="/validar-pregunta"
                                        component={ValidarPregunta}
                                      />
                                      <RutaPrivada
                                        exact
                                        path="/nueva-contraseña"
                                        component={NuevaContraseña}
                                      />
                                      <RutaPrivada
                                        exact
                                        path="/lista-servicios"
                                        component={ListadoServicios}
                                      />
                                   
                                      <RutaPrivada exact path="/servicio-cliente" component={ServiciosParaClientes}/>
                                    </Switch>
                                  </Router>
                                </AuthState>
                              </RespuestaState>
                            </ConfiguracionState>
                          </AlertaState>
                        </ProductoState>
                      </ServicioState>
                    </EmpleadoSatate>
                  </ClienteState>
                </AgendamientoState>
            </ClienteState>
          </ReporteState>
      </InsumoState>
     </OrderState>
    )
  );
}

export default App;
