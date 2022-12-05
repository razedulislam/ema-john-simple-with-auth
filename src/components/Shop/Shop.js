import React, { useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
    const [products, setProducts] = useState([]);
    fetch("fakeData/products.JSON")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    return (
        <div className="shop-cart">
            <div className="product-contaner">
                <h1>Products</h1>
                {products.map((product) => (
                    <Product key={product.key} product={product} />
                ))}
            </div>
            <div className="cart-container">
                <h1>Cart</h1>
            </div>
        </div>
    );
};

export default Shop;
