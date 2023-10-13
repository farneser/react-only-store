import {Product} from "../interfaces/Product";
import {CartProduct} from "../interfaces/CartProps";

const CART_KEY = 'cart';

export function getCartItems(): CartProduct[] {
    const savedCart = localStorage.getItem(CART_KEY);
    return savedCart ? JSON.parse(savedCart) : [];
}

export function addToCart(item: Product): CartProduct {
    const cartItems = getCartItems();

    if (cartItems.some(c => c.product.id === item.id)) {
        const cartItem = cartItems.find(c => c.product.id === item.id)

        if (cartItem !== undefined) {
            return cartItem;
        }
    }

    let id = 1;

    if (cartItems.length !== 0) {
        id = cartItems[cartItems.length - 1].id + 1
    }

    const cartItem = {id: id, product: item, count: 1}

    cartItems.push(cartItem);

    localStorage.setItem(CART_KEY, JSON.stringify(cartItems));
    return cartItem;
}

export function removeFromCart(item: Product): void {
    const cartItems = getCartItems();
    const updatedCart = cartItems.filter((cartItem) => cartItem.product.id !== item.id);
    localStorage.setItem(CART_KEY, JSON.stringify(updatedCart));
}

export function updateCart(items: CartProduct[]): void {
    localStorage.setItem(CART_KEY, JSON.stringify(items));
}