import React from "react";
import Contact from "./footerComponents/Contact";
import Socialmedia from "./footerComponents/Socialmedia";
import Profile from "./footerComponents/Profile";
import CopyRight from "./footerComponents/CopyRight";

export default function Footer(props){

    const login = props.login
    
    return (
        <div className="footer--wrapper">
            <div className="footer">
                <Contact />
                <Socialmedia />
                <Profile login={login} />             
            </div>
            <CopyRight />
        </div>     
    )
}