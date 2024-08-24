import React from "react";

function Button({buttonText, buttonType}){

    switch ({buttonType}){
        case "primary":
            return(
                <button className="primary_button">{buttonText}</button>
            )
        break
        case "secondary":
            return(
                <button className="secondary_button">{buttonText}</button>
            )
    }
    
}

export default Button;