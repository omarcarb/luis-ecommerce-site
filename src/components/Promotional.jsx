import React from "react";
import Button from "./Button";
import promotionalData from "./promotional_data.json"

function Promotional({index, reverse}){
    const promoData = promotionalData[index]
    let promoDisplay;

    if(reverse ==="true"){
        promoDisplay = (
            <>
                <div className="promotional_text">
                    <h2>{promoData.promotional_header}</h2>
                    <p>{promoData.promotional_paragraph}</p>
                    <Button buttonType={"outline"} buttonText={"Order Now"}></Button>
                </div>
                <div>
                    <img src={promoData.promotion_image} alt="" className="promotional_image"/>
                </div>
            </>
        )
    }
    else{
        promoDisplay = (
            <>
                <div>
                    <img src={promoData.promotion_image} alt="" className="promotional_image"/>
                </div>
                <div className="promotional_text">
                    <h2>{promoData.promotional_header}</h2>
                    <p>{promoData.promotional_paragraph}</p>
                    <Button buttonType={"outline"} buttonText={"Order Now"}></Button>
                </div>
            </>
        )
    }

    return(
        <section className="flex_row promotional_section">
            {promoDisplay}
        </section>
    )
}

export default Promotional;