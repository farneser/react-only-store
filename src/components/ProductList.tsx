import React, {useState} from 'react';
import {Product} from "../interfaces/Product";
import {getCartItems} from "../services/cartService";
import ProductItem from "./ProductItem";

interface ProductListProps {
    products: Product[];
    addToCart: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({products, addToCart}) => {
    return (
        <div>
            <h2>Products</h2>
            <ul>
                {products.map((product) => (
                    <ProductItem product={product}/>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
