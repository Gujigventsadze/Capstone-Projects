import React from "react";
import "../../src/Heroattr.css";
import Heroattr from "./Heroattr";
import shoePic from "../components/pics/shoe.png";
import clothesPic from "../components/pics/clothes.png";
import accPic from "../components/pics/accessories.png";
import kidClothes from "../components/pics/kidsclothes.png";

export default function Herosec() {
    return (
        <div className="bottom-middle-section">
            <div className="box-container">
                <Heroattr name="Shoes" image={shoePic} description="Latest Fashion Trends." />
                <Heroattr name="Clothes" image={clothesPic} description="Check the Top Picks!" />
                <Heroattr name="Accessories" image={accPic} description="Simple, Affordable, Stylish." />
                <Heroattr name="Kid's Clothes" image={kidClothes} description="For the little ones." />
            </div>
        </div>
    )
}