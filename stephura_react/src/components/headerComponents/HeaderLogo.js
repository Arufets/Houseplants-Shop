import React from "react";
import logo from "../img/logo.png"

export default function HeaderLogo(){
    return (
        <a href="/">
            <img className="logo" src={logo} alt="logo" />
        </a>
    )
}