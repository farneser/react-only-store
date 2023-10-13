import React, {useContext} from 'react';
import {CartContext} from "../../../providers/CartProvider";
import HeaderButton from "./button/HeaderButton";

const Header: React.FC = () => {
    const context = useContext(CartContext);

    let sum = 0;

    if (context) {
        context.cart.map(c => {
            sum += c.count * c.product.price;
        })
    }

    return (
        <div id="header">
            <HeaderButton button_text={"cart"} path={"cart"}/>
            <HeaderButton button_text={"home"} path={"/"}/>
            <div>
                <span>{sum}</span>
            </div>
        </div>
    );
};

export default Header;
