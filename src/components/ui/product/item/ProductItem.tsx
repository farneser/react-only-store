import React, {useState, useEffect, useContext, FC} from 'react';
import {Product} from '../../../../interfaces/Product';
import {CartContext} from '../../../providers/CartProvider';
import './productItem.scss';

const ProductItem: FC<{ product: Product }> = ({product}) => {
    const context = useContext(CartContext);
    const [inCart, setInCart] = useState<boolean>(false);

    useEffect(() => {
        if (context) {
            setInCart(context.isProductInCart(product));
        }
    }, [context, product]);

    return (
        <div className={"product-item"}>
            <div className={"product-details"}>
                <div className={"product-name"}>{product.name}</div>
                <div className={"product-price"}>${product.price}</div>
            </div>
            <div className={"cart-actions"}>
                {inCart ? (
                    <a href={'cart'} className={"go-to-cart-link"}>
                        Go to Cart
                    </a>
                ) : (
                    <button
                        onClick={() => context && context.handleAddToCart(product)}
                        className={"add-to-cart-button"}
                    >
                        Add to Cart
                    </button>
                )}
            </div>
        </div>
    );
};

export default ProductItem;
