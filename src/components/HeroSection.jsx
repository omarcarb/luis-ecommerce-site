import React from "react";
import HeroSectionCard from './HeroSectionCard.jsx'
import heroImage from './images/hero_placeholder.webp'

function HeroSection(){
    return(
        <section className="hero_section flex_row">
            <HeroSectionCard productName={"Sturdy, Stylish, Crisp, and Functional"} productDescription={"Try these stylish new terracotta baking trays for your next family gathering"}></HeroSectionCard>
            <img src={heroImage} alt="" id="hero_image"/>
        </section>
    )
}

export default HeroSection;