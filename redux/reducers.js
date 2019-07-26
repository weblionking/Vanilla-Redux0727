//import {CHECKOUT, ADD_CART} from './actions'


function mainReducer(state = CHECKOUT, action) {
    switch(action.type) {
        case CHECKOUT:
            return {
                type: CHECKOUT
            };
        case ADD_CART:
            return {
                    type: ADD_CART,
                    product : action.product
                };
        default:
            return state;
    }
}
