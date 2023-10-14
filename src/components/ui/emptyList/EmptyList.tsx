import {FC} from "react";
import {Link, To} from "react-router-dom";

const EmptyList: FC<{ message: String; link?: { message: String, path: To } }> = ({message, link}) => {
    return <div>
        <p>{message} {link ? <Link to={link.path}>{link.message}</Link> : ""}</p>
    </div>
}

export default EmptyList;