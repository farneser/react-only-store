import React, {useContext, useEffect, useState} from 'react';
import CartItem from './item/CartItem';
import {removeFromCart} from '../../../services/cartService';
import {CartProduct} from '../../../interfaces/CartProps';
import {CartContext} from '../../providers/CartProvider';

import './cart.scss';

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
        context?.updateCart(cartItems);
    }, [cartItems]);

    return (
        <div className={'cart-container'}>
            <h2 className={'cart-title'}>Cart</h2>
            <div className={'cart-item-list'}>
                {cartItems.map((item) => (
                    <CartItem
                        cartProduct={item}
                        increment={() => increment(item)}
                        decrement={() => decrement(item)}
                        removeFromCart={() => removeFromCart(item.product)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Cart;
