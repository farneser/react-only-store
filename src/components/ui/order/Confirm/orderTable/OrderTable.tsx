import React, {FC} from "react";
import {CartProduct} from "../../../../../interfaces/CartProps";

const OrderTable: FC<{ cart: CartProduct[] }> = ({cart}) => {
    return (
        <table>
            <caption>Order</caption>
            <tbody>
            <tr>
                <th>Product name</th>
                <th>Count</th>
                <th>Product price</th>
                <th>Full price</th>
            </tr>

            {cart.map(c => (
                <tr key={c.id}>
                    <td>{c.product.name}</td>
                    <td>{c.count}</td>
                    <td>{c.product.price}</td>
                    <td>{c.count * c.product.price}</td>
                </tr>
            ))}

            </tbody>
        </table>
    )
}

export default OrderTable;