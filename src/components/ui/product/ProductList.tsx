import React from 'react';
import {Product} from '../../../interfaces/Product';
import ProductItem from './item/ProductItem';

import './productListStyles.scss';

interface ProductListProps {
    products: Product[];
    addToCart: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({products, addToCart}) => {
    return (
        <div className="product-list">
            <h2 className="product-list-title">Products</h2>
            <ul className="product-list-item-list">
                {products.map((product) => (
                    <ProductItem product={product}/>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
