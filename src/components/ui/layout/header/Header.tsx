import React, {useContext} from 'react';
import {CartContext} from "../../../providers/CartProvider";
import HeaderButton from "./button/HeaderButton";
import locations from "../../../../locations";

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
            <HeaderButton button_text={"Home"} path={locations.rootPath}/>
            <HeaderButton button_text={"Cart"} path={locations.cartPath}/>
            <div>
                <span>{sum}</span>
            </div>
        </div>
    );
};

export default Header;
