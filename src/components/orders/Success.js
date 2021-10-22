import React from "react";

const Success = () => {
  return (
    <div className="container-catalog sombra-dark text-center">
      <h1>Pedidodo Generado con Exito</h1>
      <p>
        Pedido generado con exito para el cliente Jaime Garcia CC 1128478568
      </p>
      <a 
      href='/orders'
      className="btn btn-success"
      >Ver pedidos</a>
    </div>
  );
};
export default Success;
