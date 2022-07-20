import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa"

export default function HeaderMenu(props){

    const login = props.login

    const linkStyle = {
        fontWeight: "bold",
        fontSize: "1.1rem",
        color: "rgb(13, 26, 0)",
        textDecoration: "none",
        lineHeight: "40px"
    };

    return (
        <ul className="menu">
            <li className="menu__item"><Link style={linkStyle} to="/"><FaHome /></Link></li>
            <li className="menu__item"><Link style={linkStyle} to="/products">Produkty</Link></li>
            <li className="menu__item"><Link style={linkStyle} to="/about">O nas</Link></li>
            <li className="menu__item"><Link style={linkStyle} to="/contact">Kontakt</Link></li>
            {  login ? (<li className="menu__item"><Link style={linkStyle} to="/profile">Konto</Link></li>) : null }          
        </ul>  
    )
}