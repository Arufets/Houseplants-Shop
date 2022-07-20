import React from "react";
import ContactInfo from "../components/ContactInfo.js";
import Starter from "../components/mainComponents/Starter";


export default function Contact(){
    return (
        <div className="contact--wrapper">
            <ContactInfo />
            <Starter />
        </div>
    )
}