import React from 'react';
import {getCartItems, removeFromCart} from "../../services/cartService";
import Cart from "../ui/cart/Cart";

const CartPage: React.FC = () => {
    return (
        <div>
            <p>Cart</p>
            <Cart cart={getCartItems()} removeFromCart={removeFromCart}/>
        </div>
    );
};

export default CartPage;
