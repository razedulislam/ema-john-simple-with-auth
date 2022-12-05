import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
    // use state declare
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    //data fetch inside useEffect hook
    useEffect(() => {
        fetch("fakeData/products.JSON")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    const handlerAddToCart = (product) => {
        // console.log(product.name);
        const newCart = [...cart, product];
        // console.log(newCart);
        setCart(newCart);
    };
    return (
        <div className="shop-cart">
            <div className="product-contaner">
                <h1>Products</h1>
                {products.map((product) => (
                    <Product key={product.key} product={product} handlerAddToCart={handlerAddToCart} />
                ))}
            </div>
            <div className="cart-container">
                <Cart cart={cart} />
            </div>
        </div>
    );
};

export default Shop;
