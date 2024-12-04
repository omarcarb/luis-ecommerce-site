import React from "react";
import search from "./icons/i_search.svg"


function Input({hasIcon}){
    return(
        <div className="input_container">
            {hasIcon && <img src={search} alt="" className="icon icon_input"/>}    
            <input type="text" className="search" placeholder="Search..."/>
        </div>
    )
}

export default Input;