import React, {useState} from 'react';
import {CartProduct} from "../../../../interfaces/CartProps";

interface CartItemProps {
    cart: CartProduct;
    increment: (product: CartProduct) => void;
    decrement: (product: CartProduct) => void;
    removeFromCart: (product: CartProduct) => void;
}

const CartItem: React.FC<CartItemProps> = ({cart, increment, decrement, removeFromCart}) => {

    const [count, setCount] = useState<number>(cart.count)

    const handleIncrement = () => {
        increment(cart);
        setCount(count + 1)
    };

    const handleDecrement = () => {
        if (count > 1) {
            decrement(cart);
            setCount(count - 1)
        } else {
            handleRemoveFromCart()
        }
    };

    const handleRemoveFromCart = () => {
        removeFromCart(cart);
        setCount(0)
    };

    return (
        count !== 0 ? <li>
            <span>{cart.product.name} - ${cart.product.price} </span>
            <button onClick={handleIncrement}>+</button>
            <span>{count}</span>
            <button onClick={handleDecrement}>-</button>
            <button onClick={handleRemoveFromCart}>Remove from Cart</button>
        </li> : <></>
    );
};

export default CartItem;
