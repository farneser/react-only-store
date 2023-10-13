import React, {useState} from 'react';

import {CartProduct} from "../../../../interfaces/CartProps";
import './сartItem.scss';

interface CartItemProps {
    cartProduct: CartProduct;
    increment: (product: CartProduct) => void;
    decrement: (product: CartProduct) => void;
    removeFromCart: (product: CartProduct) => void;
}

const CartItem: React.FC<CartItemProps> = ({cartProduct, increment, decrement, removeFromCart}) => {
    const [count, setCount] = useState<number>(cartProduct.count);

    const handleIncrement = () => {
        increment(cartProduct);
        setCount(count + 1);
    };

    const handleDecrement = () => {
        if (count > 1) {
            decrement(cartProduct);
            setCount(count - 1);
        } else {
            handleRemoveFromCart();
        }
    };

    const handleRemoveFromCart = () => {
        removeFromCart(cartProduct);
        setCount(0);
    };

    return (
        count !== 0 ? (
            <li className={'cart-item'}>
                <div className={'product-details'}>
                    <span className={'product-name'}>{cartProduct.product.name}</span>
                    <span className={'product-price'}>${cartProduct.product.price}</span>
                </div>
                <div className={'quantity-controls'}>
                    <button className={'button increment-button'} onClick={handleIncrement}>+</button>
                    <span>{count}</span>
                    <button className={'button decrement-button'} onClick={handleDecrement}>-</button>
                    <button className={'button remove-button'} onClick={handleRemoveFromCart}>Remove from Cart
                    </button>
                </div>
            </li>
        ) : <></>
    );
};

export default CartItem;
