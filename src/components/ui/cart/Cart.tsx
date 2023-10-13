import React, {useState, useEffect} from 'react';
import {CartProduct, CartProps} from "../../../interfaces/CartProps";
import {getCartItems, updateCart} from "../../../services/cartService";
import CartItem from "./item/CartItem";

const Cart: React.FC<CartProps> = ({cart, removeFromCart}) => {
    const [cartItems, setCartItems] = useState(cart);

    const updateCartItems = (items: CartProduct[]) => {
        setCartItems(items)
        updateCart(items)
    }

    useEffect(() => {
        updateCartItems(getCartItems());
    }, []);

    const increment = (item: CartProduct) => {
        const itemIndex = cartItems.findIndex((cartItem) => cartItem.product.id === item.product.id);

        if (itemIndex !== -1) {
            const updatedCart = [...cartItems];

            updatedCart[itemIndex].count++;
            updateCartItems(updatedCart);
        }
    };

    const decrement = (item: CartProduct) => {
        const itemIndex = cartItems.findIndex((cartItem) => cartItem.product.id === item.product.id);

        if (itemIndex !== -1) {
            const updatedCart = [...cartItems];

            updatedCart[itemIndex].count--;

            updateCartItems(updatedCart);
        }
    };

    return (
        <div>
            <h2>Cart</h2>
            <ul>
                {cartItems.map((item) => (
                    <CartItem
                        key={item.id}
                        cart={item}
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
