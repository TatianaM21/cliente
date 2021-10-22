import React, { useReducer } from 'react';
import orderContext from './orderContext';
import orderReducer from './orderReducer';

import {
    NEXT_STEP
} from '../../types';

import clienteAxios from '../../config/axios';
const OrderState = props => {
    const initialState = {
       step: 1
    }
    // Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(orderReducer, initialState);


    const  changeStep = currentStep => {
        dispatch({
            type: NEXT_STEP,
            payload: currentStep
          });
    };



    
    return (
        <orderContext.Provider
            value={{
                step: state.step,
                changeStep
            }}
        >
            {props.children}
        </orderContext.Provider>

    )
}
export default OrderState;