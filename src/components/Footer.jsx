import React from "react";
import FooterIcon from "./icons/mexicultura_icon_desktop_footer.svg"

function Footer(){
    return(
        <footer className="flex_column">
            <div className="footer_top flex_row">
                <div className="footer_group flex_column">
                    <div className="group_header">
                        <img src={FooterIcon} alt=""/>
                    </div>
                    <div className="social_media">
                            <h2>Follow Us</h2>
                            <div className="media_group flex_row">
                                <div className="social_group">
                                    
                                </div>
                            </div>
                    </div>
                </div>
                <div className="footer_group">
                    <div className="group_header">
                        <h2></h2>
                    </div>
                </div>
                <div className="footer_group">
                    <div className="group_header">
                        <h2></h2>
                    </div>
                </div>
            </div>
            <div className="footer_bottom flex_row">

            </div>
        </footer>
    )
}

export default Footer;