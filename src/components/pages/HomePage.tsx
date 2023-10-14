import React from 'react';
import ProductList from "../ui/product/ProductList";
import {Product} from "../../interfaces/Product";

const HomePage: React.FC = () => {

    const productList: Product[] = [
        {id: 1, name: "Product A", price: 10.99},
        {id: 2, name: "Product B", price: 25.49},
        {id: 3, name: "Product C", price: 5.99},
        {id: 4, name: "Product D", price: 15.99},
    ];

    return (
        <div>
            <p>Products</p>
            <ProductList products={productList}/>
        </div>
    );
};

export default HomePage;
