import React from 'react';
import {CartProps} from "../components/CartProps";

const Cart: React.FC<CartProps> = ({cart, removeFromCart}) => {
    return (
        <div>
            <h2>Cart</h2>
            <ul>
                {cart.map((item) => (
                    <li key={item.id}>
                        {item.name} - ${item.price}
                        <button onClick={() => removeFromCart(item)}>Remove from Cart</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;
