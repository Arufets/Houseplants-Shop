import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function LoginForm(props) {
    const linkStyle = {
        textDecoration: "none",
        color: "inherit",
        "&:hover" : {
            backgroundColor: "white",
        }
    };

    const[email, setEmail] = useState("")
    const[password, setPassoword] = useState("")
    const[users, setUsers] = useState("")

    const login = props.login;
    const setLogin = props.toggleLogin;

    useEffect(() => {
        fetch("http://localhost:8080/user/getUsers")
            .then(res => res.json())
            .then(data => {
                setUsers(data.map(user => user))         
            })
    }, [])

    console.log(users)

    const toggleLogin = () => {
        setLogin(!login)
    }

    React.useEffect(() => {
        localStorage.setItem("isLogged", JSON.stringify(login));
    }, [login])

    const bcrypt = require('bcryptjs');

    const handleLogin = () => {
        users.forEach(user => {
            if(user.email === email && bcrypt.compareSync(`${password}`, user.password)){
                console.log("password and login correct")
                    localStorage.setItem("loggedUser", JSON.stringify(user))                
                    toggleLogin();
                return true;          
            }
            return false;
        }); 
    }

    return (
        <div className="login-form--wrapper">
            <div className="login-form">
                <label className="login-form__title" htmlFor="email">Email</label>
                <input className="login-form__input" id="email" type="email" onChange={(e) => {setEmail(e.target.value)}}/>

                <label className="login-form__title" htmlFor="password">Hasło</label>
                <input className="login-form__input" id="password" type="password" onChange={(e) => {setPassoword(e.target.value)}}/>

                <button className="login-form__btn">
                    <Link 
                        to="/" style={linkStyle}
                        onClick={(toggleLogin && handleLogin)}
                    >
                        Zaloguj
                    </Link>
                </button>
                <button className="login-form__btn">
                    <Link style={linkStyle} to="/register">Utwórz konto</Link>
                </button> 
            </div>          
        </div>
    )
}