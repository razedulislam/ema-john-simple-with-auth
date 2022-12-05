import React from "react";
import "./Product.css";

const Product = (props) => {
    const { img, name, price, seller, stock } = props.product;

    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="product-des">
                <h3 className="product-name">{name}</h3>
                <h4>seller by : {seller}</h4>
                <h4>Price :{price}</h4>
                <p className="product-stock">Stock Only : {stock} products</p>
                <button onClick={() => props.handleraddToProducts(props.product)} className="shop-btn">
                    Add To Cart
                </button>
            </div>
        </div>
    );
};

export default Product;
