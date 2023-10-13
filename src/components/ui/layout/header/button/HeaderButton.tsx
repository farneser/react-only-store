import {useNavigate} from "react-router-dom";
import "./headerButton.scss";

interface Props {
    button_text: string;
    path: string;
    iconPath?: string
}

const HeaderButton = ({path, button_text, iconPath}: Props) => {
    const navigate = useNavigate()

    path = path.toLowerCase();

    let active = "";

    if (window.location.pathname.toLowerCase().includes(path)) {
        active = " header__link_active";
    }

    if (window.location.pathname.toLowerCase() !== "/" && path === "/") {
        active = ""
    }

    return (
        <div onClick={() => navigate(path)}
             className={"header__link" + active}>
            {iconPath && <img src={iconPath} alt={iconPath}></img>}
            {button_text}
        </div>
    );
};

export default HeaderButton;