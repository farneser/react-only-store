import React, {useState, useEffect, FC, useContext} from 'react';
import {Product} from "../../../../interfaces/Product";
import {addToCart, getCartItems} from "../../../../services/cartService";
import {CartContext} from "../../../providers/CartProvider";
import {CartProps} from "../../../../interfaces/CartProps";

const ProductItem: FC<{ product: Product }> = ({product}) => {

    const context = useContext(CartContext);

    const [inCart, setInCart] = useState<boolean>(false);

    useEffect(() => {
        if (context) {
            setInCart(context.isProductInCart(product));
        }
    });

    return (
        <li>
            {product.name} - ${product.price}
            {inCart ? <a href={"cart"}>Go to Cart</a> :
                <button onClick={() => context && context.handleAddToCart(product)}>Add to Cart</button>}
        </li>
    );
};

export default ProductItem;
