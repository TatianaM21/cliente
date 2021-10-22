import {
    NEXT_STEP,
    ERROR,
    LIMPIAR
} from '../../types';

export default (state, action) => {
    switch (action.type) {

        case NEXT_STEP:
            return {
                ...state,
                step:  action.payload
            }
        case ERROR:
            return {
                ...state,
                mensaje: action.payload
            }
        case LIMPIAR:
            return {
                ...state,
                mensaje: null,
                mensajeConfirmacion: ''
            }

        default:
            return state;
    }
}