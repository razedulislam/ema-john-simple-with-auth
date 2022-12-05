import React from "react";
import "./Product.css";

const Product = (props) => {
    const { img, name, price, seller } = props.product;

    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="product-des">
                <h3>{name}</h3>
                <h4>seller by : {seller}</h4>
                <h4>Price :L {price}</h4>
                <button className="shop-btn">Add To Cart</button>
            </div>
        </div>
    );
};

export default Product;
