import React from "react";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { deleteFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const Orders = () => {
    //nijeder create kora hook call korechi= useProducts
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    //handleRemoveProduct k props hisabe reviewItem a pathai deya hoyeche
    const handleRemoveProduct = (product) => {
        //cart er id product er id sathe compare korte hobe
        const rest = cart.filter((pd) => pd.key !== product.key);
        setCart(rest);
        deleteFromDb(product.key);
    };
    return (
        <div>
            {/* <h1>This is orders sections {products.length}</h1>
            <h1>Cart has : {cart.length}</h1> */}
            <div className="shop-cart">
                <div className="product-contaner">
                    {cart.map((product) => (
                        <ReviewItem handleRemoveProduct={handleRemoveProduct} key={product.key} product={product} />
                    ))}
                </div>
                <div className="cart-container">
                    <Cart cart={cart}>
                        <Link to="/inventory">
                            <button>Inventory Checkout</button>{" "}
                        </Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Orders;
