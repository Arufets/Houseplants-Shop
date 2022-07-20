import React from "react";
import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa"

export default function Socialmedia() {
    return (
        <div className="footer__container">
            <h3 className="footer__title">OBSERWUJ NAS</h3>
            <div>
                <FaFacebook className="socialmedia-icon"/>
                <FaInstagram className="socialmedia-icon"/>
                <FaTwitter className="socialmedia-icon"/>
            </div>    
        </div>
    )
}