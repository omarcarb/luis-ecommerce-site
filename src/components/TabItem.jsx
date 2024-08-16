import React from "react";
import downArrow from "./icons/i_cheveron_down_sm.svg"

function TabItem({name, hasIcon}){
    return(
        <li className="flex_row">{name}{hasIcon && <img src={downArrow} alt="" className="icon"></img>}</li>
    )
}

export default TabItem;