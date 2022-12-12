import React from "react";
import "./ReviewItem.css";

const ReviewItem = (props) => {
    const { product, handleRemoveProduct } = props;
    const { name, seller, price, img } = props.product;
    return (
        <div className="review-items">
            <div className="review-img-item">
                <img className="review-img" src={img} alt="" />
            </div>
            <div className="review-info">
                <div>
                    <h5 title={name}>{name.length > 20 ? name.slice(0, 50) + "..." : name}</h5>
                    <p>Price : {price}</p>
                    <p>Shipping charge : $55</p>
                </div>
                <div className="review-btn-item">
                    <button onClick={() => handleRemoveProduct(product)} className="review-btn">
                        {" "}
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;
