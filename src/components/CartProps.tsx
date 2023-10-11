import {Product} from "../interfaces/Product";

export interface CartProps {
    cart: Product[];
    removeFromCart: (product: Product) => void;
}