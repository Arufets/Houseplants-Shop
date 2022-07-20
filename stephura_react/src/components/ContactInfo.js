import React from "react";
import Contact from "./footerComponents/Contact";
import Socialmedia from "./footerComponents/Socialmedia";

export default function ContactInfo() {
    return (
        <div className="contact">
            <Contact />
            <Socialmedia />
        </div>
    )
}