import React, {useState, useEffect, FC} from 'react';
import {Product} from "../interfaces/Product";
import {addToCart, getCartItems} from "../services/cartService";

const ProductItem: React.FC<{ product: Product }> = ({product}) => {

    const cart = getCartItems();
    const [inCart, setInCart] = useState<boolean>(false);

    const isProductInCart = (product: Product) => {
        return cart.some(item => item.product.id === product.id);
    };
    useEffect(() => {
        if (isProductInCart(product)) {
            setInCart(true);
        }
    }, []);

    const handleAddToCart = (product: Product) => {
        addToCart(product);
        setInCart(true)
    };

    return (
        <div>
            <li key={product.id}>
                {product.name} - ${product.price}
                {inCart ? <a href={"cart"}>Go to Cart</a> :
                    <button onClick={() => handleAddToCart(product)}>Add to Cart</button>}
            </li>
        </div>
    );
};

export default ProductItem;
