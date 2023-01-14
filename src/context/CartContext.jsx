import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart([...cart, item])
    }

    const emptyCart = () => {
        setCart([])
    }

    const isInCart = (id) => {
        return cart.some(item => item.id === id)
    }

    const totalPrice = () => {
        return cart.reduce((acc, item) => acc + item.price * item.amount, 0)
    }

    const removeFromCart = (id) => {
        setCart( cart.filter(item => item.id !== id) )
    }

    return(
        <CartContext.Provider value={{ cart, addToCart, isInCart, emptyCart, totalPrice, removeFromCart }}>
            {children}
        </CartContext.Provider>
    )
}