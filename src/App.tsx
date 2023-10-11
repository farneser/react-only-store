import React, {useEffect, useState} from 'react';
import ProductList from './components/ProductList';
import Cart from './interfaces/Cart';
import {Product} from "./interfaces/Product";

function getProducts() {
    return [
        {id: 1, name: 'Product 1', price: 10.0},
        {id: 2, name: 'Product 2', price: 15.0},
        {id: 3, name: 'Product 3', price: 20.0},
    ];
}

function App() {
    const initialProducts = getProducts()

    const [products, setProducts] = useState<Product[]>(initialProducts);
    const [cart, setCart] = useState<Product[]>([]);

    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    }, []);

    const addToCart = (product: Product) => {
        const updatedCart = [...cart, product];
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const removeFromCart = (product: Product) => {
        const updatedCart = cart.filter((item) => item.id !== product.id);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    return (
        <div className="App">
            <ProductList products={products} addToCart={addToCart}/>
            <Cart cart={cart} removeFromCart={removeFromCart}/>
        </div>
    );
}

export default App;
