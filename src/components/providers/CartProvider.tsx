import React, {createContext, PropsWithChildren, useContext, useState} from 'react';
import {addToCart, getCartItems} from "../../services/cartService";
import {Product} from "../../interfaces/Product";
import {CartProduct} from "../../interfaces/CartProps"; // Replace with the actual path

interface CartContextType {
    cart: CartProduct[];
    isProductInCart: (product: Product) => boolean;
    handleAddToCart: (product: Product) => void;
}

export const CartContext = createContext<CartContextType | null>(null);

export const CartProvider: React.FC<PropsWithChildren> = ({children}) => {
    const [cart, setCart] = useState<CartProduct[]>(getCartItems());

    const isProductInCart = (product: Product) => {
        return cart.some(item => item.id === product.id);
    };

    const handleAddToCart = (product: Product) => {
        const cartItem = addToCart(product);
        setCart([...cart, cartItem]);
    };

    return (
        <CartContext.Provider value={{cart, isProductInCart, handleAddToCart}}>
            {children}
        </CartContext.Provider>
    );
};
