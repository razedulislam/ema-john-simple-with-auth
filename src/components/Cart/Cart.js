import React from "react";
import "./Cart.css";
const Cart = (props) => {
    const { cart } = props;
    console.log(cart);
    let totalPrice = 0;
    let totalQuantity = 0;
    for (const product of cart) {
        totalPrice = totalPrice + product.price;
        //ekhane cart theke quantity dekhai dibo/ parent theke quantity set korechi 37 number line theke
        if (!product.quantity) {
            product.quantity = 1;
        }
        totalQuantity = totalQuantity + product.quantity;
    }
    const tax = totalPrice * 0.1;

    let deliveryCharge = 30;
    deliveryCharge = totalPrice > 0 ? deliveryCharge : 0;

    const grantTotal = totalPrice + tax + deliveryCharge;
    return (
        <div className="cart-price-calculation">
            <h1>This is cart</h1>
            {/* <h4>Cart Length : {cart.length}</h4> */}
            <h4>Order Quantity : {totalQuantity}</h4>
            <h4>price :{totalPrice.toFixed(2)}</h4>
            <h4>Tax :{tax.toFixed(2)}</h4>
            <h4>Delivery Charge : {deliveryCharge}</h4>
            <hr />
            <h4>Grant Total : {grantTotal.toFixed(2)}</h4>
            {props.children}
        </div>
    );
};

export default Cart;
