import React, {useState} from 'react';
import {CartProduct} from "../../../../interfaces/CartProps";

interface CartItemProps {
    cartProduct: CartProduct;
    increment: (product: CartProduct) => void;
    decrement: (product: CartProduct) => void;
    removeFromCart: (product: CartProduct) => void;
}

const CartItem: React.FC<CartItemProps> = ({cartProduct, increment, decrement, removeFromCart}) => {

    const [count, setCount] = useState<number>(cartProduct.count)

    const handleIncrement = () => {
        increment(cartProduct);
        setCount(count + 1)
    };

    const handleDecrement = () => {
        if (count > 1) {
            decrement(cartProduct);
            setCount(count - 1)
        } else {
            handleRemoveFromCart()
        }
    };

    const handleRemoveFromCart = () => {
        removeFromCart(cartProduct);
        setCount(0)
    };

    return (
        count !== 0 ? <li>
            <span>{cartProduct.product.name} - ${cartProduct.product.price} </span>
            <button onClick={handleIncrement}>+</button>
            <span>{count}</span>
            <button onClick={handleDecrement}>-</button>
            <button onClick={handleRemoveFromCart}>Remove from Cart</button>
        </li> : <></>
    );
};

export default CartItem;
