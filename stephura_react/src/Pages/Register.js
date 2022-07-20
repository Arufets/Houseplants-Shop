import React from "react";
import AboutInfo from "../components/AboutInfo";
import RegisterForm from "../components/registerComponents/RegisterForm";

export default function Login(){
    return (
        <div className="login--wrapper"> 
            <RegisterForm />
            <AboutInfo />
        </div>
    )
}