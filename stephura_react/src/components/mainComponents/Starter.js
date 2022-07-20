import React from "react";
import { Link } from "react-router-dom";

export default function Starter(){

    const linkStyle = {
        textDecoration: "none",
        color: "rgb(230, 236, 204)"
    };

    return (
        <div className="starter">
            <div className="starter__info">
                <h1 className="starter__title">Znajdź roślinę dla siebie</h1>
                <h2 className="starter__subtitle">Przeglądaj oferty i znajdź roślinę odpowiadającą Twoim wymaganiom!</h2>
                <button className="starter__btn">
                    <Link style={linkStyle} to="/products">Przeglądaj oferty</Link>
                </button>
            </div>     
        </div>
    )
}