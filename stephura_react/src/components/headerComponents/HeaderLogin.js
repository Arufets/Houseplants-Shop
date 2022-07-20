import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa"

export default function HeaderToolbar(props){

    const setLogin = props.setLogin
    const login = props.login

    const loggedUser = localStorage.getItem("loggedUser")
    const user = JSON.parse(loggedUser)

    const linkStyle = {
        fontWeight: "bold",
        fontSize: "1.1rem",
        color: "rgb(13, 26, 0)",
        textDecoration: "none",
        marginLeft: "10px"
    };

    React.useEffect(() => {
        localStorage.setItem("isLogged", JSON.stringify(login));
    }, [login])

    const toggleLogin = () => {
        setLogin(!login)
        localStorage.clear()
    }

    return (
        <div className="login">
            <Link to={ !login ? "/login" : "/" }>
                <button 
                    className="login__btn" 
                    onClick={ login ? toggleLogin : undefined}
                >
                    { login ? "Wyloguj" : "Zaloguj" }
                </button>
            </Link>
            { 
                login ? (<Link style={linkStyle} to={"/profile/" + user.id + "/pendingoffers"}><FaShoppingCart /></Link>) : null                
            }
        </div>     
    )
}