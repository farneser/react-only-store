import React, {useState, useEffect, useContext, FC} from 'react';
import {Product} from '../../../../interfaces/Product';
import {CartContext} from '../../../providers/CartProvider';
import './productItem.scss';
import {useNavigate} from "react-router-dom";
import locations from "../../../../locations";

const ProductItem: FC<{ product: Product }> = ({product}) => {
    const context = useContext(CartContext);
    const [inCart, setInCart] = useState<boolean>(false);

    const navigate = useNavigate();

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
                    <a onClick={() => navigate(locations.cartPath)} className={"go-to-cart-link"}>
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
