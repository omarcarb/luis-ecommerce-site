import React from "react";
import Button from "./Button";

function HeroSectionCard({productName, productDescription}){
    return(
        <div>
            <h1>{productName}</h1>
            <p>{productDescription}</p>
            <div className="button_container">
                <Button buttonText={"this is a button"}></Button>
                <Button buttonText={"This is another button"}></Button>
            </div>
            
        </div>
    )
}

export default HeroSectionCard;