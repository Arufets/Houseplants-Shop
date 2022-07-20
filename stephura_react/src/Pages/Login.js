import React, { useEffect } from "react";
import AboutInfo from "../components/AboutInfo";
import LoginForm from "../components/loginComponents/LoginForm";

export default function Login(props){

    const toggleLogin = props.toggleLogin
    const login = props.login

    useEffect(() => {
        window.scroll(0,0)
    }, [])

    return (
        <div> 
            <LoginForm toggleLogin={toggleLogin} login={login}/>
            <AboutInfo />
        </div>
    )
}