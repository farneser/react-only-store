import React, {useContext} from 'react';
import {CartContext} from "../../../providers/CartProvider";
import HeaderButton from "./button/HeaderButton";

const Header: React.FC = () => {
    const context = useContext(CartContext);

    return (
        <div id="header">
            <HeaderButton button_text={"cart"} path={"cart"}/>
            <HeaderButton button_text={"home"} path={"/"}/>
            <div>
                <span>{context ? context.cart.length : 0}</span>
            </div>
        </div>
    );
};

export default Header;
