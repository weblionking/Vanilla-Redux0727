const INCREMENT_OFFSET = 1;
const DECREMENT_OFFSET = -1;
const RESET_OFFSET = 0;

const defaultState = [];

function cartReducer(state = defaultState, action) {
    switch(action.type) {
        case 'INCREMENT':
            return [
                ...state,
                action.currentCount + INCREMENT_OFFSET
            ];
        case 'DECREMENT':
            return [
                ...state,
                action.currentCount + DECREMENT_OFFSET
            ];
        case 'RESET':
            return [
                ...state,
                RESET_OFFSET
            ];
        case 'FORMAT':
            return defaultState;
        default:
            return state;
    }
}
