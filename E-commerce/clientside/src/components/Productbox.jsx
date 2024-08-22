import React from "react";
import "../../src/Productbox.css";

export default function Productbox({image, name, price}) {
    return (
        <div className="product-container">
            <img src={image} alt="product-image" />
            <p className="product-name">{name}</p>
            <p className="price">${price}</p>
            <button>Add to Cart</button>
        </div>
    )
}