import {FC} from "react";
import HeaderButton from "./button/HeaderButton";

const Header: FC = () => {
    return (
        <div id="header">
            <HeaderButton button_text={"cart"} path={"cart"}/>
            <HeaderButton button_text={"home"} path={"/"}/>
        </div>
    );
};

export default Header;