import React, {createContext, PropsWithChildren, useContext, useState} from 'react';
import {CartProduct} from "../../interfaces/CartProps";
import {CartContext} from "./CartProvider";

interface Card {
    number: string;
    expDate: string
}

interface OrderContextType {
    cart: CartProduct[];
    address: string;
    card: Card;
    handleSetAddress: (address: string) => void;
    handleSetCard: (card: Card) => void;
    getCartSum: () => number;
}

export const OrderContext = createContext<OrderContextType | null>(null);

export const OrderProvider: React.FC<PropsWithChildren> = ({children}) => {

    const context = useContext(CartContext);

    const [address, setAddress] = useState<string>("");
    const [card, setCard] = useState<Card>({number: "", expDate: ""});

    const handleSetAddress = (address: string) => {
        setAddress(address);
    };

    const handleSetCard = (card: Card) => {
        setCard(card);
    };

    const getCartSum = () => {
        let sum = 0;

        if (context) {
            context.cart.map(c => {
                sum += c.count * c.product.price
            })
        }

        return sum
    }

    return (
        <OrderContext.Provider
            value={{cart: context ? context.cart : [], card, address, handleSetAddress, handleSetCard, getCartSum}}>
            {children}
        </OrderContext.Provider>
    );
};
