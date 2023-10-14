import React from 'react';
import Cart from "../ui/cart/Cart";
import ThreeStepForm from "../ui/order/ThreeStepForm";

const CartPage: React.FC = () => {
    return (
        <div>
            <p>Cart</p>
            <Cart/>
            <ThreeStepForm/>
        </div>
    );
};

export default CartPage;
