import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {CartProvider} from "./components/providers/CartProvider";
import "./styles.css"
import {OrderProvider} from "./components/providers/OrderProvider";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <CartProvider>
            <OrderProvider>
                <App/>
            </OrderProvider>
        </CartProvider>
    </React.StrictMode>
);
