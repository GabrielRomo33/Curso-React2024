import { createContext, useReducer, useState } from "react";
import { Cartreducer, cartInitialState } from "../reducers/Cart";

// creamos el contexto
export const CartContext = createContext()

function useCartReducer () {
    const [state, dispatch] = useReducer(Cartreducer, cartInitialState);

    const addToCart = product => dispatch({
        type: 'ADD_ACTION_CART',
        payload: product
    });
    const removeFormCart = product => dispatch({
        type: 'REAMOVE_FROM_CART',
        payload: product
    });
    const clearCart = () => dispatch({ type: 'CLEAN_CART' });
    return { state, addToCart, removeFormCart, clearCart }
}

//creamos el provider
export function CartProvider({children}) {
    const { state, addToCart, removeFormCart, clearCart } = useCartReducer();
    return (
        <CartContext.Provider value={{
            cart: state,
            addToCart,
            removeFormCart,
            clearCart }} >
            {children}
        </CartContext.Provider>
    )
}