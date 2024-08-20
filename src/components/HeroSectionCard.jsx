import React from "react";

function HeroSectionCard({productName, productDescription}){
    return(
        <div>
            <h1>{productName}</h1>
            <p>{productDescription}</p>
        </div>
    )
}

export default HeroSectionCard;