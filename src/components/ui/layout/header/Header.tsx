import {FC, useEffect, useState} from "react";
import HeaderButton from "./button/HeaderButton";
import {getCartItems} from "../../../../services/cartService";
import {CartProduct} from "../../../../interfaces/CartProps";

const Header: FC = () => {
    const [cart, setCart] = useState<CartProduct[]>([]); // Initialize the cart state with an empty array

    useEffect(() => {
        // Fetch cart items when the component mounts
        const fetchCartItems = async () => {
            const cartItems = await getCartItems();
            setCart(cartItems);
        };

        fetchCartItems();
    }, []); // The empty dependency array ensures this effect runs only once on mount

    return (
        <div id="header">
            <HeaderButton button_text={"cart"} path={"cart"}/>
            <HeaderButton button_text={"home"} path={"/"}/>
            <div>
                <span>{cart.length}</span>
            </div>
        </div>
    );
};

export default Header;
