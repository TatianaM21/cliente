import React, { Fragment, useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";

const ShoppingCart = () => {
    const [responsiveContainer, setResponsiveConteiner] = useState('container-shopping-cart');

    
    // Obtener proyectos cuando carga el componente
    useEffect(() => {
            const handleResize = () => {
              if (window.innerWidth >= 960) {
                setResponsiveConteiner('container-shopping-cart');
              } else {
                setResponsiveConteiner('contenedor-basico-movil sombra-dark');
              }
            };
            window.addEventListener("resize", handleResize);
            return () => {
              window.removeEventListener("resize", handleResize);
            };
      // eslint-disable-next-line
    }, []);
  return (
    <Fragment>
      <div className={responsiveContainer}>
        <h1>
          <FaShoppingCart />{" "} 5
        </h1>
        <ul class="list-group">
          <li class="list-group-item">Cras justo odio</li>
          <li class="list-group-item">Dapibus ac facilisis in</li>
          <li class="list-group-item">Morbi leo risus</li>
          <li class="list-group-item">Porta ac consectetur ac</li>
          <li class="list-group-item">Vestibulum at eros</li>
        </ul>
        <h3>Total:</h3><span>$54.000</span>
      </div>
    </Fragment>
  );
};
export default ShoppingCart;
