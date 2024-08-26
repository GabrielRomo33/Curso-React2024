import { createContext, useState } from "react";

// creamos el contexto
export const CartContext = createContext()

//creamos el provider
export function CartProvider({children}) {
    const [cart, setCart] = useState([]);

    const addToCart = product => {
        //priemro revisamos si el producto ya se encuentra en el carrito
        const productInCartIndex = cart.findIndex(item => item.id === product.id);

        if( productInCartIndex >= 0){
            const newCart = structuredClone(cart);
            newCart[productInCartIndex].quantity += 1
            return setCart(newCart);
        }

        setCart(prevState => ([
            ...prevState,
            {
                ...product,
                quantity: 1
            }
        ]));
    }

    const clearCart = () => {
        setCart([]);
    }
    

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            clearCart }} >
            {children}
        </CartContext.Provider>
    )
}