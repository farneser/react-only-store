import React, {createContext, PropsWithChildren, useState} from 'react';
import {addToCart, getCartItems, updateCart as updateCartService} from "../../services/cartService";
import {Product} from "../../interfaces/Product";
import {CartProduct} from "../../interfaces/CartProps";

interface CartContextType {
    cart: CartProduct[];
    isProductInCart: (product: Product) => boolean;
    handleAddToCart: (product: Product) => void;
    updateCart: (cart: CartProduct[]) => void;
}

export const CartContext = createContext<CartContextType | null>(null);

export const CartProvider: React.FC<PropsWithChildren> = ({children}) => {
    const [cart, setCart] = useState<CartProduct[]>(getCartItems());

    const isProductInCart = (product: Product) => {
        return cart.some(item => item.product.id === product.id);
    };

    const handleAddToCart = (product: Product) => {
        const cartItem = addToCart(product);
        setCart([...cart, cartItem]);
    };

    const updateCart = (newCart: CartProduct[]) => {
        setCart(newCart);
        updateCartService(newCart)
    };

    return (
        <CartContext.Provider value={{cart, isProductInCart, handleAddToCart, updateCart}}>
            {children}
        </CartContext.Provider>
    );
};
