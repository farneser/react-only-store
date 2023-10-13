import React, {useContext, useEffect, useState} from 'react';
import CartItem from "./item/CartItem";
import {removeFromCart} from "../../../services/cartService";
import {CartProduct} from "../../../interfaces/CartProps";
import {CartContext} from "../../providers/CartProvider";

const Cart: React.FC = () => {
    const context = useContext(CartContext);

    const [cartItems, setCartItems] = useState(context ? context.cart : []);

    const increment = (item: CartProduct) => {
        const updatedCart = cartItems.map((cartItem) =>
            cartItem.product.id === item.product.id
                ? {...cartItem, count: cartItem.count + 1}
                : cartItem
        );

        if (context) {
            setCartItems(updatedCart);
            context.updateCart(updatedCart);
        }
    };

    const decrement = (item: CartProduct) => {
        const updatedCart = cartItems.map((cartItem) =>
            cartItem.product.id === item.product.id
                ? {...cartItem, count: cartItem.count - 1}
                : cartItem
        );


        if (context) {
            setCartItems(updatedCart);
            context.updateCart(updatedCart);
        }
    };

    useEffect(() => {
        setCartItems(cartItems);
        context?.updateCart(cartItems)
    }, [cartItems]);

    return (
        <div>
            <h2>Cart</h2>
            <ul>
                {cartItems.map(item => (
                    <CartItem
                        key={item.id}
                        cartProduct={item}
                        increment={() => increment(item)}
                        decrement={() => decrement(item)}
                        removeFromCart={() => removeFromCart(item.product)}
                    />
                ))}
            </ul>
        </div>
    );
};

export default Cart;
