import {Outlet} from 'react-router-dom';
import {FC} from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';

import './layout.scss';

const Layout: FC = () => {
    return (
        <div id="layout" className={'layout'}>
            <Header/>
            <main>
                <div id="body" className={'body'}>
                    <div className={'body__container'}>
                        <Outlet/>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
};

export default Layout;
