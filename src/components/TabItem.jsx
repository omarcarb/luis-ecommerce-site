import React, { useState } from "react";
import downArrow from "./icons/i_cheveron_down_sm.svg"

function TabItem({name, hasIcon, menuItems}){
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
    return(
        <li className="flex_row" onClick={toggleDropdown} onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>{name}{hasIcon && <img src={downArrow} alt="" className="icon"></img>}{isOpen && menuItems && (
            <ul className="dropdown-menu flex_column">
              {menuItems.map((item, index) => (
                <li key={index} className="dropdown-item">
                  {item}
                </li>
              ))}
            </ul>
          )}</li>
    )
}


export default TabItem;