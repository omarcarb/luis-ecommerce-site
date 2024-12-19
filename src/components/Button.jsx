import React from "react";

function Button({buttonText, buttonType}){

    switch (buttonType){
        case "primary":
            return(
                <button className="primary_button">{buttonText}</button>
            )
        break
        case "secondary":
            return(
                <button className="secondary_button">{buttonText}</button>
            )
        break
        case "outline":
            return(
                <button className="outline_button">{buttonText}</button>
            )
        break
        case "borderless":
            return(
                <button className="borderless_button">{buttonText}</button>
            )
        break
    }
    
}

export default Button;