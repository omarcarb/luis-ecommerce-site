import React, { useState } from "react";

function TabItem({name, hasIcon, menuItems}){
    const [isOpen, setIsOpen] = useState(false);

    const handleMouseEnter = () => {
      setIsOpen(true);
    };
  
    const handleMouseLeave = () => {
      setIsOpen(false);
    };
    
    return (
      <li
        className="nav_item flex_row"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {name}
        {hasIcon && (
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 9L12 15L5 9" />
          </svg>
        )}
        {isOpen && menuItems && (
          <ul className="dropdown-menu flex_column">
            {menuItems.map((item, index) => (
              <li key={index} className="dropdown_item">
                {item}
              </li>
            ))}
          </ul>
        )}
      </li>
    );
}


export default TabItem;