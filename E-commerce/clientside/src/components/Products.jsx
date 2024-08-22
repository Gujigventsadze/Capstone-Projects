import React from "react";
import Productbox from "./Productbox";
import somePic from "../components/pics/clothes.png";
import "../../src/Productbox.css";

export default function Products() {
    return (
        <div className="products-grid">
            <Productbox name="Whatever" image={somePic} price="6.99" />
            <Productbox name="Whatever" image={somePic} price="6.99" />
            <Productbox name="Whatever" image={somePic} price="6.99" />
            <Productbox name="Whatever" image={somePic} price="6.99" />
            <Productbox name="Whatever" image={somePic} price="6.99" />
            <Productbox name="Whatever" image={somePic} price="6.99" />
            <Productbox name="Whatever" image={somePic} price="6.99" />
        </div>
        
    )
}