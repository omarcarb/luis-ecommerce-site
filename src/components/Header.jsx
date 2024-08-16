import React from "react";
import cart from "./icons/i_cart.svg"
import Input from "./Input.jsx"
import TabItem from "./TabItem.jsx";
import logo from "./images/placeholder_logo.png"



function Header(){

    return(
        <header className="flex_row">
            <img src={logo} alt="" className="logo"/>
            <Input hasIcon={true}></Input>
            <nav>
                <ul className="flex_row">
                    <TabItem name = "Products" hasIcon={true}></TabItem>
                    <TabItem name = "On Sale" hasIcon={false}></TabItem>
                    <TabItem name = "About Us" hasIcon={false}></TabItem>
                    <li><img src={cart} alt="cart icon" className="icon" /></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;