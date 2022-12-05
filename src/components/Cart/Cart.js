import React from "react";

const Cart = (props) => {
    const { cart } = props;
    let totalPrice = 0;
    for (const product of cart) {
        totalPrice = totalPrice + product.price;
    }
    const tax = totalPrice * 0.1;

    let deliveryCharge = 30;
    deliveryCharge = totalPrice > 0 ? deliveryCharge : 0;

    const grantTotal = totalPrice + tax + deliveryCharge;
    return (
        <div>
            <h1>This is cart</h1>
            <h4>Cart Length : {cart.length}</h4>
            <h4>price :{totalPrice.toFixed(2)}</h4>
            <h4>Tax :{tax.toFixed(2)}</h4>
            <h4>Delivery Charge : {deliveryCharge}</h4>
            <hr />
            <h4>Grant Total : {grantTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;
