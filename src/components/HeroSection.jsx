import React from "react";
import HeroSectionCard from './HeroSectionCard.jsx'
import heroImage from './images/hero_placeholder.webp'

function HeroSection(){
    return(
        <section className="hero_section flex_row">
            <img src={heroImage} alt="" id="hero_image"/>
            <HeroSectionCard productName={"Sturdy, Stylish, Crisp, and Functional"} productDescription={"Try these stylish new terracotta baking trays made from terracota from Oaxaca for your next family gathering or upcoming holiday"}></HeroSectionCard>
        </section>
    )
}

export default HeroSection;