import React, { useEffect, useState } from "react";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
    // use state declare
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayCart, setDisplayCart] = useState([]);

    //data fetch inside useEffect hook
    useEffect(() => {
        fetch("fakeData/products.JSON")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setDisplayCart(data);
            });
    }, []);

    const handleraddToProducts = (product) => {
        // console.log(product.name);
        const newCart = [...cart, product];
        // console.log(newCart);
        setCart(newCart);
        // console.log(product);
        addToDb(product.key);
    };
    useEffect(() => {
        if (products.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const key in savedCart) {
                const adToProduct = products.find((product) => product.key === key);
                if (adToProduct) {
                    //joto gula key ase seta pauya jabe
                    const quantity = savedCart[key];
                    //adtoproduct er vitor quantity set kore deya jai .. amora setai korbo
                    adToProduct.quantity = quantity;
                    //ekhon cart er vitor amora quantity dekhte pabo + seta amora cart er vitor dekhabo
                    storedCart.push(adToProduct);
                }
            }
            setCart(storedCart);
        }
        //product load korar jonno produces set korechi ...products k dependency hisabe dite hobe na dile undefined pabo
    }, [products]);

    const searchProduct = (event) => {
        console.log(event.target.value);
        const searchProduct = event.target.value;
        const matchProduct = products.filter((product) => product.name.toLowerCase().includes(searchProduct.toLowerCase()));
        setDisplayCart(matchProduct);
    };

    return (
        <>
            <div className="search">
                <input onChange={searchProduct} className="search-field" type="text" placeholder="Search Your Products" />
            </div>
            <div className="shop-cart">
                <div className="product-contaner">
                    <h1>Products</h1>
                    {displayCart.map((product) => (
                        <Product key={product.key} product={product} handleraddToProducts={handleraddToProducts} />
                    ))}
                </div>
                <div className="cart-container">
                    <Cart cart={cart} />
                </div>
            </div>
        </>
    );
};

export default Shop;
