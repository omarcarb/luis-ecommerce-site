import React from "react";
import HeroSectionCard from './HeroSectionCard.jsx'
import heroImage from './images/hero_placeholder.webp'

function HeroSection(){
    return(
        <div className="hero_section flex_row">
            <HeroSectionCard productName={"Watch"} productDescription={"This is a watch with things on it."}></HeroSectionCard>
            <img src={heroImage} alt="" />
        </div>
    )
}

export default HeroSection;