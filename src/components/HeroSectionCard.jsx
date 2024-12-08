import React from "react";
import Button from "./Button";

function HeroSectionCard({productName, productDescription}){
    return(
        <div id="hero_text" className="flex_column">
            <div className="flex_column" id="text_group">
                <h1>{productName}</h1>
                <p>{productDescription}</p>
            </div>
            <div className="button_container">
                <Button buttonText={"Buy Now"} buttonType="primary" />
            </div>
            
        </div>
    )
}

export default HeroSectionCard;