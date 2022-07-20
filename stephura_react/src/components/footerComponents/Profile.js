import React from "react";
import { Link } from "react-router-dom";

export default function Profile(props) {

    const login = props.login
    const setLogin = props.setLogin

    const linkStyle = {
        textDecoration: "none",
        color: "inherit"
    }

    const toggleLogin = () => {
        setLogin(!login)
        localStorage.clear()
    }

    let handleRefresh = () => {
        this.setState({})
    }

    const loggedUser = localStorage.getItem("loggedUser")
    const user = JSON.parse(loggedUser)

    return (
        <div className="footer__container">
            <h3 className="footer__title">MOJE KONTO</h3>
            <ul className="footer__menu">
                <li className="footer__list">
                    <Link 
                        style={linkStyle} 
                        to={ !login ? "/login" : `/profile/${user.id}/offertsprofile` }
                        onClick={handleRefresh}
                    >
                        Moje oferty
                    </Link>
                </li>
                <li className="footer__list">
                    <Link 
                        style={linkStyle} 
                        to={ !login ? "/login" : `/profile/${user.id}/purchasesprofile` }
                        onClick={handleRefresh}
                    >
                        Moje zakupy
                    </Link>
                </li>
                <li className="footer__list">
                    <Link 
                        style={linkStyle} 
                        to={ !login ? "/login" : `/profile/${user.id}/viewprofile` }
                        onClick={handleRefresh}
                    >
                        Szczegóły konta
                    </Link>
                </li >
                <Link 
                    style={linkStyle} 
                    to={ login ? "/login" : "/profile" } 
                    onClick={toggleLogin}
                >
                    <li className="footer__list"><b>{!login ? "Zaloguj się" : "Wyloguj"}</b></li>
                </Link>
            </ul>
        </div>
    )
}