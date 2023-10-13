import {Product} from "../interfaces/Product";
import {CartItem} from "../interfaces/CartProps";

const CART_KEY = 'cart';

export function getCartItems(): CartItem[] {
    const savedCart = localStorage.getItem(CART_KEY);
    return savedCart ? JSON.parse(savedCart) : [];
}

export function addToCart(item: Product): void {
    const cartItems = getCartItems();

    let id = 1;

    if (cartItems.length != 0) {
        id = cartItems[cartItems.length - 1].id + 1
    }

    cartItems.push({id: id, product: item, count: 1});

    localStorage.setItem(CART_KEY, JSON.stringify(cartItems));
}

export function removeFromCart(item: Product): void {
    const cartItems = getCartItems();
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
    localStorage.setItem(CART_KEY, JSON.stringify(updatedCart));
}
