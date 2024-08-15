import React from "react";
import cart from "./icons/i_cart.svg"
import Input from "./Input.jsx"
import TabItem from "./TabItem.jsx";
import logo from "./images/placeholder_logo.png"


function Header(){
    const tabName = ["Products", "On Sale", "About Us"];

    return(
        <header className="flex_row">
            <img src={logo} alt="" className="logo"/>
            <Input></Input>
            <nav>
                <ul className="flex_row">
                    {tabName.map((tabName, index) => (
                    <TabItem key={index} name={tabName} />
                    ))}
                    <li><img src={cart} alt="cart icon" className="icon" /></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;