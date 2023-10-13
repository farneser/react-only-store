import {Outlet} from "react-router-dom";
import {FC} from "react";
import Header from "./header/Header";
import Footer from "./Footer";

const Layout: FC = () => {
    return (
        <div id="layout">
            <Header/>
            <main>
                <div id="body">
                    <div className="body__container">
                        <Outlet/>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
};

export default Layout;