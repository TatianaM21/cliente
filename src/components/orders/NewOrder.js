import React, { Fragment, useContext, useState, useEffect } from "react";
import SideNav from '../inicio/Navbar';
import Customer from "./Customer";
import OrderContext from "../../context/orders/orderContext";
import Catalog from '../orders/Catalog';
import RecurrentProducts from './RecurringProducts';
import CheckOut from "./CheckOut";
import Success from "./Success";

const NewOrder = ()=>{

    const orderContext = useContext(OrderContext);
    const {step} = orderContext;

    const [currentStep, setStep] = useState();

    useEffect(() => {
        setStep(step);
        // eslint-disable-next-line
    }, [step])

    return(
      <Fragment>
       <SideNav/>  
          <div className="contenedor-principal">
          <br></br>   
          {step === 1? (
           <Customer/>
          ):null}

          {step === 2? (
           <RecurrentProducts/>
          ):null}

          {step === 3? (
           <CheckOut/>
          ):null}
        
          {step === 4? (
           <Success/>
          ):null}

       </div>
      </Fragment>

    )
}

export default NewOrder;