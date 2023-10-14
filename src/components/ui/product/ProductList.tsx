import React from 'react';
import {Product} from '../../../interfaces/Product';
import ProductItem from './item/ProductItem';

import ListContainer from "../ListContainer/ListContainer";
import EmptyList from "../emptyList/EmptyList";

interface ProductListProps {
    products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({products}) => {
    return (
        <ListContainer>
            {products.length > 0 ? products.map((product) => (
                <ProductItem product={product}/>
            )) : <EmptyList message={"Products not found"}/>}
        </ListContainer>
    );
};

export default ProductList;
