export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || [];

export const CART_ACTIONS_TYPES = {
    ADD_ACTION_CART: 'ADD_ACTION_CART',
    REAMOVE_FROM_CART: 'REAMOVE_FROM_CART',
    CLEAN_CART: 'CLEAN_CART' ,
}

//update lcoal storage with for cart
export const updateLocalStorage = state => {
    window.localStorage.setItem('cart', JSON.stringify(state));
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
            const newState = [
                ...state,
                {
                    ...actionPayload,
                    quantity: 1
                }
            ]
            updateLocalStorage(newState);
            return newState;
        }
        case CART_ACTIONS_TYPES.REAMOVE_FROM_CART: {
            const { id } = actionPayload;
            const newState = state.filter(item => item.id !== id);
            updateLocalStorage(newState);
            return newState
        }
        case CART_ACTIONS_TYPES.CLEAN_CART: {
            updateLocalStorage([]);
            return [];
        }
    }
    return state;
}