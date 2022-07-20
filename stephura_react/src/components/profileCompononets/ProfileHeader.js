import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function ProfileHeader() {

    const linkStyle = {
        fontSize: "1.1rem",
        color: "rgb(13, 26, 0)",
        textDecoration: "none",
    };

    const loggedUser = localStorage.getItem("loggedUser")
    const user = JSON.parse(loggedUser)

    return (
        <div className="profile-header">
            <h1 className="profile-header__title">TWOJE KONTO :</h1>
            <ul className="profile-header__menu">
                <li className="profile-header__item">
                    <Link className="profile-header__link" to={user.id + "/viewprofile"} style={linkStyle}>Szczegóły konta</Link>
                </li>
                <li className="profile-header__item">
                    <Link className="profile-header__link" to={user.id + "/editprofile"} style={linkStyle}>Edycja konta</Link>
                </li>
                <li className="profile-header__item">
                    <Link className="profile-header__link" to={user.id + "/pendingoffers"} style={linkStyle}>Oferty oczekujące</Link>
                </li>
                <li className="profile-header__item">
                    <Link className="profile-header__link" to={user.id + "/purchasesprofile"} style={linkStyle}>Moje zakupy</Link>
                </li>
                <li className="profile-header__item">
                    <Link className="profile-header__link"to={user.id + "/offertsprofile"} style={linkStyle}>Moje oferty</Link>
                </li>              
            </ul>
            <div>
                <Outlet className="editProfile"/>
            </div>  
        </div>
    )
}