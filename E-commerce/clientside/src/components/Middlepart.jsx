import React from "react";
import "../../src/Middlepart.css"
import backgroundImg from "./pics/backgroundimg.png";
import { Link } from "react-router-dom";

export default function Middlepart() {
    return (
        <div className="ad-container">
            <img src={backgroundImg} alt="Woman holding shopping bags" className="main-img" />
            <div className="product-presentation">
                <p>Present Your Products to Millions</p>
                <Link to='/products'><button>Open Shop Now</button></Link>
            </div>
        </div>
    )
}