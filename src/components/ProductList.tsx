import React from 'react';
import {Product} from "../interfaces/Product";
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
                    <ProductItem product={product} key={product.id}/>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
