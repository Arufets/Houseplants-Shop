import React, { useEffect, useState } from "react";
import HeaderLogo from "./headerComponents/HeaderLogo.js"
import HeaderMenu from "./headerComponents/HeaderMenu"
import HeaderLogin from "./headerComponents/HeaderLogin"
import HeaderSearchbar from "./headerComponents/HeaderSearchbar"

export default function Header(props){
    const[search, setSearch] = useState("")

    const setLogin = props.setLogin
    const login = props.login

    let[show, setShow] = useState(true)
    let[scrollPos, setScrollPos] =useState(0)

    let handleScroll = () => {
        window.scrollY > scrollPos ? setShow(false) : setShow(true);
        setScrollPos(window.scrollY);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [scrollPos])
    
    return(
        <header className={show ? "header--wrapper" : "hidden"}>
            <div className="header">         
                <div className="header--first">
                    <HeaderLogo />
                    <HeaderMenu login={login} />
                </div>
                <div className="header--second">
                    <HeaderSearchbar search={search} setSearch={setSearch}/>    
                    <HeaderLogin setLogin={setLogin} login={login}/>
                </div>
            </div>
        </header>
    )
}