import React from "react";
import { Link } from "react-router-dom";
import "../../src/Heroattr.css";

export default function Heroattr({image, name, description}) {
    return (
            <div className="hero-container">
                <img src={image} alt="shoe" className="hero-img" />
                <div className="hero-name">{name}</div>
                <p>{description}</p>
                <Link to='/products'><button className="hero-btn">Shop Now</button></Link>
            </div>
    )
}