import {Product} from "./Product";

export interface CartProps {
    cart: CartProduct[];
    removeFromCart: (product: Product) => void;
}

export interface CartProduct {
    product: Product;
    id: number;
    count: number;
}