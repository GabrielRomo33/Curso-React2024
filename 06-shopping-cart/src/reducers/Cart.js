export const cartInitialState = [];

export const CART_ACTIONS_TYPES = {
    ADD_ACTION_CART: 'ADD_ACTION_CART',
    REAMOVE_FROM_CART: 'REAMOVE_FROM_CART',
    CLEAN_CART: 'CLEAN_CART' ,
}

export const Cartreducer  = (state, action ) => {
    const { type: actionType, payload: actionPayload } = action;
    
    switch (actionType) {
        case CART_ACTIONS_TYPES.ADD_ACTION_CART:{
            const {id} = actionPayload
            const productInCartIndex = state.findIndex(item => item.id === id);
            if (productInCartIndex >= 0) {
                const newState = structuredClone(state);
                newState[productInCartIndex].quantity += 1;
                return newState;
            }
            return [
                ...state,
                {
                    ...actionPayload,
                    quantity: 1
                }
            ]
        }
        case CART_ACTIONS_TYPES.REAMOVE_FROM_CART: {
            const { id } = actionPayload;
            return state.filter(item => item.id !== id);
        }
        case CART_ACTIONS_TYPES.CLEAN_CART: {
            return cartInitialState
        }
    }
    return state;
}